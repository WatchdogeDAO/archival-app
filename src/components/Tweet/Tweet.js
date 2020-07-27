import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Layout Styles
const TweetContainer = styled(Card)`
  word-break: break-all;
  margin: 20px;
  & a {
    color: ${props => props.theme.palette.primary.main};
  }
`;

const TweetBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

// Header Styles
const TweetHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ArchiveNumber = styled(Typography)``;

const ArchiveDate = styled(Typography)`
  font-weight: bold;
`;

// Text Styles

const TextContent = styled.div`
  @media (min-width: 600px) {
    width: 50%;
  }
`;

const SourceDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TweetTextContainer = styled(Paper)`
  width: 100%;
  padding: ${props => props.theme.spacing(2)}px;
  background-color: ${props => props.theme.palette.primary.light};
  color: white;
`;

const TweetText = styled(Typography)``;

// Media Styles

const Media = styled.div`
  max-height: 400px;
  max-width: 50%;
`;

const Video = styled.video`
  width: 100%;
  object-fit: cover;
`;

const Tweet = ({tweet}) => {
  const ipfsUrl = `https://ipfs.io/ipfs/${tweet.hash}`;

  const formatDate = date => moment(date).format('MMM Do YYYY');

  return (
    <TweetContainer>
      <CardContent>
        <TweetHeader>
          <ArchiveNumber variant="h6">Archived Tweet Nº {tweet.id}</ArchiveNumber>
          <ArchiveDate variant="body1">{formatDate(tweet.date)}</ArchiveDate>
        </TweetHeader>
        <Divider />
        <TweetBody>
          <TextContent>
            <p>
              IPFS Hash:{' '}
              <a href={ipfsUrl} target="_blank" rel="noopener noreferrer">
                {tweet.hash}
              </a>
            </p>
            <SourceDetails>
              <p>
                Archived by:{' '}
                <a
                  href={`https://twitter.com/${tweet.archiverHandle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{tweet.archiverHandle}
                </a>
              </p>
              <p>
                <a href={tweet.tweetUrl} target="_blank" rel="noopener noreferrer">
                  Original Tweet
                </a>
              </p>
            </SourceDetails>
            <TweetTextContainer elevation={1}>
              <TweetText variant="body1">{tweet.text}</TweetText>
            </TweetTextContainer>
          </TextContent>
          <Media>
            <Video controls>
              <source src={ipfsUrl} type="video/mp4"></source>
            </Video>
          </Media>
        </TweetBody>
      </CardContent>
    </TweetContainer>
  );
};

export default Tweet;
