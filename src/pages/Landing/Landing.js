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
          <Link to="/archive">Police Archive</Link>
        </StyledButton>
        <StyledButton variant="contained" color="primary">
          <Link to="/datasets">OpenGov Backups</Link>
        </StyledButton>
      </Actions>
    </Jumbotron>

    <Block>
      <BlockTitle>The Prototype</BlockTitle>
      <Text>
        This is a small prototype focused on police accountability. Footage from US protests has
        shown a troubling amount of instances of police abuse of power. Footage is kept on Twitter
        and some of it is already lost. This prototype is comprised of a few parts: A DAO with
        crypto savvy people that can accept or refect twitter users that want to become archivers.
        "Archivers" which are just twitter accounts that have been given vetted to interact with a
        twitter bot and archive videos on IPFS+Filecoin by doing "@watchdogedao #archive"
      </Text>
    </Block>
    <Block>
      <BlockTitle>Why a DAO?</BlockTitle>
      <Text>
        There are plenty of countries where pushing for more transparent and accountable
        governmental organizations is dangerous or extremely difficult. Having unstoppable tools
        like DAOs, to help coordination and collaboration is a requirement in those cases. There’s
        also common infrastructure that we can build, so starting with an open source and
        decentralized mentality is the way to go.
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
