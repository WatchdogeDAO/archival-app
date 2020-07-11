import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [archive, setArchive] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:3001/videos");
      setArchive(data);
    };

    getData();
  });
  if (archive === null) return null;
  return (
    <>
      <video controls>
        <source src={archive.data[0].publicUrl} type="video/mp4"></source>
      </video>
      <h1>{archive.data[0].publicUrl}</h1>
    </>
  );
}

export default App;
