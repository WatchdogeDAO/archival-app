import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "components/Header";
import TweetList from "components/TweetList";

function App() {
  const [tweets, setTweets] = useState(null);
  useEffect(() => {
    const fetchTweets = async () => {
      const response = await axios.get("http://localhost:3001/tweets");
      setTweets(response.data.tweets);
    };

    fetchTweets();
  }, []);

  if (tweets === null) return null;

  return (
    <>
      <Header />
      <TweetList tweets={tweets} />
    </>
  );
}

export default App;
