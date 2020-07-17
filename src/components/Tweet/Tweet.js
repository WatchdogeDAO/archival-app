import React from "react";
import styled from "styled-components";
import moment from "moment";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const TweetContainer = styled(Card)`
  word-break: break-all;
  margin: 20px;
`;

const TweetHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SourceDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TweetText = styled.div``;

const Tweet = ({ tweet }) => {
  const ipfsUrl = `https://ipfs.io/ipfs/${tweet.hash}`;

  const formatDate = date => moment(date).format("MMM Do YYYY");

  return (
    <TweetContainer>
      <CardContent>
        <div>
          <TweetHeader>
            <Typography variant="body1">Archived Tweet Nº {tweet.id}</Typography>
            <Typography variant="body1">{formatDate(tweet.date)}</Typography>
          </TweetHeader>
          <Divider />
          <p>
            IPFS Hash:{" "}
            <a href={ipfsUrl} target="_blank" rel="noopener noreferrer">
              {tweet.hash}
            </a>
          </p>
          <SourceDetails>
            <p>
              Archived by:{" "}
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
          <Divider />
          <TweetText>
            <p>{tweet.text}</p>
          </TweetText>
        </div>
        <div>
          <video controls>
            <source src={ipfsUrl} type="video/mp4"></source>
          </video>
        </div>
      </CardContent>
    </TweetContainer>
  );
};

export default Tweet;
