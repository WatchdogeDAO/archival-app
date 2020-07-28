import React from 'react';

const HashLink = ({hash}) => (
  <a href={`https://ipfs.io/ipfs/${hash}`} target="_blank" rel="noopener noreferrer">
    {hash}
  </a>
);

export default HashLink;
