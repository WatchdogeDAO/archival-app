import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

import TweetList from 'components/TweetList';
import Loading from 'components/Loading';

const ArchiveContainer = styled.div`
  padding: ${props => props.theme.spacing(3)}px auto;
`;

const LoadingTweets = styled.div`
  margin: ${props => props.theme.spacing(5)}px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled(Typography)`
  color: ${props => props.theme.palette.primary.light};
  margin-top: ${props => props.theme.spacing(1)}px;
`;

const Archive = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get('https://cryptomeetup.online/tweets');
      setTweets(response.data.tweets);
    };

    fetchTweets();
  }, []);

  return (
    <ArchiveContainer>
      {tweets ? (
        <TweetList tweets={tweets} />
      ) : (
        <LoadingTweets>
          <Loading />
          <LoadingText variant="h5">Fetching Archive</LoadingText>
        </LoadingTweets>
      )}
    </ArchiveContainer>
  );
};

export default Archive;
