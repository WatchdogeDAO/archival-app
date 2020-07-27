import React, {useState} from 'react';
import axios from 'axios';
import {ethers} from 'ethers';
import Divider from '@material-ui/core/Divider';
import Hash from 'ipfs-only-hash';
import {useApps, useOrganization} from '@aragon/connect-react';
import {
  ArchiversContainer,
  FormContainer,
  MemberArea,
  Form,
  FormTitle,
  FormDescription,
  LoadingMembers,
  FormField,
  FormSubmit,
  LoadingText,
  TableTitle,
  TableContainer,
} from './styles';

import MemberList from '../../components/MemberList';
import useMembers from '../../hooks/useMembers';
import Loading from '../../components/Loading';

const Archivers = () => {
  const [org, orgStatus] = useOrganization();
  const [apps, appsStatus] = useApps();
  const loading = orgStatus.loading || appsStatus.loading;
  const members = useMembers();

  const [twitterId, setTwitterId] = useState(null);
  const [message, setMessage] = useState(null);

  const handleTwitterIdChange = event => setTwitterId(event.target.value);

  const handleMessageChange = event => setMessage(event.target.value);

  const sendProposal = async () => {
    await window.ethereum.enable();
    // TODO: Handle web3 account not connected.
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let accounts = await provider.listAccounts();
    if (apps.length === 0) return;

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
      await axios.post('https://cryptomeetup.online/pin', {data: ipfsContent});
    } catch (e) {
      console.log('Something went wrong when pinning:', e);
    }
  };

  return (
    <ArchiversContainer>
      <FormContainer>
        <FormTitle>Want to add an approved archiver?</FormTitle>
        <FormDescription>
          We need their Twitter ID, you can get it from{' '}
          <a href="http://gettwitterid.com/" target="_blank" rel="noopener noreferrer">
            here
          </a>
        </FormDescription>
        <Form>
          <FormField
            label="Twitter Id"
            rows={4}
            placeholder="994080172"
            variant="outlined"
            onChange={handleTwitterIdChange}
          />
          <FormField
            label="Message"
            multiline
            rows={4}
            placeholder="I should be accepted as an archiver because..."
            variant="outlined"
            onChange={handleMessageChange}
          />
          <FormSubmit variant="contained" color="primary" onClick={sendProposal}>
            Request Approval
          </FormSubmit>
        </Form>
      </FormContainer>

      <Divider />

      <MemberArea>
        {members ? (
          <TableContainer>
            <TableTitle variant="h5">Current Archivers</TableTitle>
            <MemberList members={members} />
          </TableContainer>
        ) : (
          <LoadingMembers>
            <Loading height="15%" width="15%" />
            <LoadingText variant="h5">Fetching Archivers</LoadingText>
          </LoadingMembers>
        )}
      </MemberArea>
    </ArchiversContainer>
  );
};

export default Archivers;
