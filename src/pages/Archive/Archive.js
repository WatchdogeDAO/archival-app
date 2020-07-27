import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TweetList from 'components/TweetList';

const Archive = () => {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get('https://cryptomeetup.online/tweets');
      setTweets(response.data.tweets);
    };

    fetchTweets();
  }, []);

  if (tweets === null) return null;
  return <TweetList tweets={tweets} />;
};

export default Archive;
