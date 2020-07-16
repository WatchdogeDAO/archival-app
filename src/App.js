import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [archive, setArchive] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3001/tweets");
      setArchive(data.data.tweets);
    };

    getData();
  });
  if (archive === null) return null;
  return (
    <>
      {archive.map(tweet => (
        <>
          <p>{tweet.text}</p>
          <video controls>
            <source
              src="https://ipfs.io/ipfs/bafybeiarblg7ztdz43issh6egak4nk7ku27d5zettw6z6fnoyotoyeomrq"
              type="video/mp4"
            ></source>
          </video>
        </>
      ))}
    </>
  );
}

export default App;
