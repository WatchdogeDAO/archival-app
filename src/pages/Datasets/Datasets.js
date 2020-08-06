import React from 'react';
import {Link} from 'react-router-dom';

const Datasets = () => (
  <div>
    <h1>Dataset Repository</h1>
    <p>
      Governments have ongoing open gov initiatives. It's no guarantee that the next government will
      continue the same course. It's also not a guarantee that functionaries will tamper with past
      data. We store verifiable snapshots of said data on Filecoin.
    </p>
    <h2>Datasets</h2>
    <Link to="/datasets/argentina">Argentina</Link>
  </div>
);

export default Datasets;
