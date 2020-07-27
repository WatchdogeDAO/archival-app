import React from 'react';
import Container from '@material-ui/core/Container';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {Connect} from '@aragon/connect-react';

import Landing from 'pages/Landing';
import Archive from 'pages/Archive';
import Archivers from 'pages/Archivers';
import Header from 'components/Header';

function App() {
  return (
    <Connect
      location="0x1EC8593c30C8e1E3a4685b5f7b048cD56174B4C3"
      connector="thegraph"
      options={{chainId: 4}}
    >
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/archivers">
              <Archivers />
            </Route>
            <Route path="/archive">
              <Archive />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Container>
      </Router>
    </Connect>
  );
}

export default App;
