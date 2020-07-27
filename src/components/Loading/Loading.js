import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({type = 'spinningBubbles', color = '#467fcf', height = '20%', width = '20%'}) => (
  <ReactLoading type={type} color={color} height={height} width={width} />
);

export default Loading;
