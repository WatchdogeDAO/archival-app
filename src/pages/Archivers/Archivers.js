import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ethers} from 'ethers';
import {connect} from '@aragon/connect';
import {CuratedList} from 'connect-thegraph-curated-list';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Hash from 'ipfs-only-hash';

import MemberList from '../../components/MemberList';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const Archivers = () => {
  const [members, setMembers] = useState(null);
  useEffect(() => {
    const getMembers = async () => {
      const org = await connect('0x5005e04882845575f7433796B0DF0858e901B544', 'thegraph', {
        chainId: 4,
      });

      const apps = await org.apps();
      const {address} = apps.find(app => app.appName.includes('list.open'));

      const curatedList = await new CuratedList(
        address,
        'https://api.thegraph.com/subgraphs/name/mauerv/aragon-registry-rinkeby-staging'
      );
      const members = await curatedList.members();
      setMembers(members);
    };
    getMembers();
  }, []);

  const [twitterId, setTwitterId] = useState(null);
  const [message, setMessage] = useState(null);

  const handleTwitterIdChange = event => setTwitterId(event.target.value);

  const handleMessageChange = event => setMessage(event.target.value);

  const sendProposal = async () => {
    // TODO: Handle web3 account not connected.
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let accounts = await provider.listAccounts();

    const org = await connect('0x5005e04882845575f7433796B0DF0858e901B544', 'thegraph', {
      chainId: 4,
    });

    const apps = await org.apps();
    const {address} = apps.find(app => app.appName.includes('list.open'));

    const ipfsContent = {
      twitterId,
      justification: message,
    };
    const ipfsHash = await Hash.of(JSON.stringify(ipfsContent));
    const intent = await org.appIntent(address, 'addArchiver', [twitterId, ipfsHash]);
    const path = await intent.paths(accounts[0]);

    // TODO: Handle transaction errors.
    try {
      for (const transaction of path.transactions) {
        let {children, description, descriptionAnnotated, ...parsedTransaction} = transaction;
        await signer.sendTransaction(parsedTransaction);
      }
    } catch (e) {
      console.log('Something went wrong:', e);
    }

    // TODO: Handle pinning errors.
    try {
      await axios.post('https://watchdog-dao.herokuapp.com/pin', {data: ipfsContent});
    } catch (e) {
      console.log('Something went wrong when pinning:', e);
    }
  };

  return (
    <div>
      <p>Want to add an approved archiver?</p>
      <p>
        We need their Twitter ID, you can get it from{' '}
        <a href="http://gettwitterid.com/" target="_blank" rel="noopener noreferrer">
          here
        </a>
      </p>
      <Form>
        <TextField
          label="Twitter Id"
          rows={4}
          placeholder="994080172"
          variant="outlined"
          onChange={handleTwitterIdChange}
        />
        <TextField
          label="Message"
          multiline
          rows={4}
          placeholder="I should be accepted as an archiver because..."
          variant="outlined"
          onChange={handleMessageChange}
        />
        <Button variant="contained" color="primary" onClick={sendProposal}>
          Request Approval
        </Button>
        {members && <MemberList members={members} />}
      </Form>
    </div>
  );
};

export default Archivers;
