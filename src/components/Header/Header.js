import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const Brand = styled(Typography).attrs({variant: 'h4'})`
  & a {
    color: white;
    text-decoration: none;
  }
`;

const HeaderLink = styled(Typography).attrs({variant: 'body1'})`
  & a {
    color: white;
    text-decoration: none;
  }
  margin-left: 25px;
`;

const StyledAppBar = styled(AppBar)`
  .MuiToolbar-root {
    justify-content: space-between;
  }
`;

const Menu = styled.div`
  display: flex;
`;

const Header = () => (
  <StyledAppBar position="static">
    <Toolbar>
      <Brand variant="h4">
        <Link to="/">Watchdog DAO</Link>
      </Brand>
      <Menu>
        <HeaderLink variant="h4">
          <Link to="/datasets">OpenGov</Link>
        </HeaderLink>
        <HeaderLink variant="h4">
          <Link to="/archive">Police</Link>
        </HeaderLink>
        <HeaderLink variant="h4">
          <a href="https://rinkeby.aragon.org/#/watchdogedao" target="_blank" rel="noopener">
            Dao
          </a>
        </HeaderLink>
        <HeaderLink variant="h4">
          <Link to="/archivers">Archivers</Link>
        </HeaderLink>
      </Menu>
    </Toolbar>
  </StyledAppBar>
);

export default Header;
