import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import MemberListItem from '../MemberListItem';

const MemberList = ({members}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Twitter ID</TableCell>
          <TableCell>IPFS Justification</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {members.map(member => (
          <MemberListItem member={member} key={member.id} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default MemberList;
