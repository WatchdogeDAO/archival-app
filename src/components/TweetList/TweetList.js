import React from "react";
import Tweet from "components/Tweet";

const TweetList = ({ tweets }) => (
  <>
    {tweets.map((tweet, i) => (
      <Tweet tweet={tweet} key={i} />
    ))}
  </>
);

export default TweetList;
