import React from "react";
import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "pages/Landing";
import Archive from "pages/Archive";
import Archivers from "pages/Archivers";
import Header from "components/Header";

function App() {
  return (
    <>
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
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
