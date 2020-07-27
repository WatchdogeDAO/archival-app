import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import HashLink from '../HashLink';

const MemberListItem = ({member}) => (
  <TableRow>
    <TableCell>{member.id}</TableCell>
    <TableCell>
      <HashLink hash={member.justification} />
    </TableCell>
  </TableRow>
);

export default MemberListItem;
