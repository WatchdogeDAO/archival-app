import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const LandingContainer = styled.div``;
const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 30px auto;
  text-align: center;
`;
const Brand = styled(Typography).attrs({variant: 'h2'})``;
const Subtitle = styled(Typography).attrs({variant: 'h6'})`
  font-weight: 300;
  width: 80%;
`;
const Block = styled.div`
  margin: 50px auto;
  @media (min-width: 600px) {
    width: 90%;
  }
  @media (min-width: 960px) {
    width: 80%;
  }
`;
const BlockTitle = styled(Typography).attrs({variant: 'h4'})``;
const Text = styled(Typography).attrs({variant: 'body1'})``;
const Actions = styled.div`
  display: flex;
  justify-content: center;
  margin: 25px auto;
  & a {
    text-decoration: none;
    color: white;
  }
`;
const StyledButton = styled(Button).attrs({
  variant: 'contained',
  color: 'primary',
  size: 'large',
})`
  margin: auto 10px;
`;

const Landing = () => (
  <LandingContainer>
    <Jumbotron>
      <Brand>Watching the Watchers</Brand>
      <Subtitle>
        A global DAO led by citizens. Building solutions to increase government and public
        institutions transparency and accountability.
      </Subtitle>
      <Actions>
        <StyledButton variant="contained" color="primary">
          <Link to="/datasets">OpenGov Backups</Link>
        </StyledButton>
        <StyledButton variant="contained" color="primary">
          <Link to="/archive">Police Archive</Link>
        </StyledButton>
      </Actions>
    </Jumbotron>

    <Block>
      <BlockTitle>Why a DAO?</BlockTitle>
      <Text>
        There are plenty of countries where pushing for more transparent and accountable
        governmental organizations is dangerous or extremely difficult. There are also countries
        where pushing for change might be safe now, but possibly not in 10-20 years. 2020 has once
        again shown us how fragile everything really is. Unstoppable tools like DAOs, decentralized
        finance and storage help coordination and collaboration in places where it would otherwise
        be impossible. Most infrastructure that we build will benefit everyone, so starting with an
        open source and decentralized mentality is the way to go.
      </Text>
    </Block>
    <Block>
      <BlockTitle>The Police Archive</BlockTitle>
      <Text>
        Instances of state and police abuse of force should be kept in long term storage. We can't
        put that responsability in Twitter or Facebook. Argentina for example had a military coup 40
        years ago. Countless people "dissapeared" on the hands of military officers. Current
        goverments are looking for the people responsible. Can we expect Twitter to safely store
        relevant data for 40 years? Our DAO vets approved archivers which will be able to store
        police videos in IPFS and Filecoin by just tagging our @watchdogedao bot.
      </Text>
    </Block>
    <Block>
      <BlockTitle>Opengov Backups</BlockTitle>
      <Text>
        Countries around the world are starting to push for open data initiatives. That's good. But
        data in centralized database can be tampered with. The new people in power might consider it
        beneficial to destroy or stop providing said data. We will store provable snapshots of
        opengov data from countries around the world on Filecoin. People in 10 years will be able to
        verifiably check that a given government dataset published a long time ago was not tampered
        by the current administration.
      </Text>
    </Block>
    <Block>
      <BlockTitle>Community</BlockTitle>
      <Text>
        The community has just started, but If you want to reach out. Here's the Org's{' '}
        <a href="https://twitter.com/watchdogedao" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        ,{' '}
        <a href="https://discord.gg/bkU9Tz" target="_blank" rel="noopener noreferrer">
          Discord
        </a>{' '}
        and{' '}
        <a href="https://github.com/WatchdogeDAO/" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        .
      </Text>
    </Block>
  </LandingContainer>
);

export default Landing;
