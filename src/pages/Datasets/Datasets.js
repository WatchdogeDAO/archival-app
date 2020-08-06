import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledContainer = styled.div`
  margin: 20px auto;
`;

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.palette.primary.main};
  color: white;
  text-decoration: none;
  border-radius: 5px;
  padding: 10px 15px;
`;

const Datasets = () => (
  <StyledContainer>
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Snapshot Date</TableCell>
            <TableCell>Original Source</TableCell>
            <TableCell>Deal CiD</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Argentina</TableCell>
            <TableCell>08/08/2020</TableCell>
            <TableCell>
              <a target="_blank" href="https://datos.gob.ar/">
                https://datos.gob.ar/
              </a>
            </TableCell>
            <TableCell>bafyreiailwdlxrjsujhhrpfhoxm2djby3dvck2q556undrdcvqicx6e7v4</TableCell>
            <TableCell>
              <StyledLink to="/datasets/argentina">See Dataset</StyledLink>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </StyledContainer>
);

export default Datasets;
