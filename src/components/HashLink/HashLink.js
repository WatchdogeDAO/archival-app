import React from 'react';

const HashLink = ({hash}) => <a href={`https://ipfs.io/ipfs/${hash}`}>{hash}</a>;

export default HashLink;
