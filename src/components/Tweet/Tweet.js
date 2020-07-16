import React from "react";

const Tweet = ({ tweet }) => (
  <>
    <p>{tweet.text}</p>
    <video controls>
      <source src={`https://ipfs.io/ipfs/${tweet.hash}`} type="video/mp4"></source>
    </video>
  </>
);

export default Tweet;
