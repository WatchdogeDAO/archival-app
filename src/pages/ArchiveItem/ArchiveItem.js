import axios from 'axios';
import React, {useState, useEffect} from 'react';

const ArchiveItem = ({match}) => {
  const [tweet, setTweet] = useState(null);
  useEffect(() => {
    const fetchTweet = async () => {
      const {hash} = match.params;
      const response = await axios.get(`https://cryptomeetup.online/tweets/${hash}`);
      setTweet(response.data);
    };

    fetchTweet();
  }, [match.params]);

  if (!tweet) return null;

  return (
    <div>
      <p>Date: {tweet.date}</p>
      <p>ipfsHash: {tweet.hash}</p>
      <p>Archiver: ${tweet.archiverHandle}</p>
      <p>Text: ${tweet.text}</p>
      <p>Original Url</p>
      <video></video>
    </div>
  );
};

export default ArchiveItem;
