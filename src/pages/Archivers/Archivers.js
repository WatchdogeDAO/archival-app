import React, {useState} from 'react';
import axios from 'axios';
import {ethers} from 'ethers';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hash from 'ipfs-only-hash';
import {useApps, useOrganization} from '@aragon/connect-react';

import MemberList from '../../components/MemberList';
import useMembers from '../../hooks/useMembers';
import Loading from '../../components/Loading';

const ArchiversContainer = styled.div``;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.spacing(3)}px auto;
`;

const MemberArea = styled.div`
  margin-top: ${props => props.theme.spacing(3)}px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 960px) {
    width: 75%;
  }
  @media (min-width: 1280px) {
    width: 50%;
  }
`;

const FormTitle = styled(Typography).attrs({variant: 'h5'})`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;
const FormDescription = styled(Typography)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
`;

const LoadingMembers = styled.div`
  padding: ${props => props.theme.spacing(4)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormField = styled(TextField)`
  margin-bottom: ${props => props.theme.spacing(1)}px;
  width: 100%;
`;

const FormSubmit = styled(Button)``;

const LoadingText = styled(Typography)`
  color: ${props => props.theme.palette.primary.light};
`;

const Archivers = () => {
  const [org, orgStatus] = useOrganization();
  const [apps, appsStatus] = useApps();
  const loading = orgStatus.loading || appsStatus.loading;
  const error = orgStatus.error || appsStatus.error;
  // const members = useMembers();
  const members = null;

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

    if (loading) return;
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
          <MemberList members={members} />
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
