import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import MemberListItem from '../MemberListItem';

const MemberList = ({members}) => (
  <List>
    <ListItem>
      <p>Twitter ID</p>
      <p>IPFS Justification</p>
    </ListItem>
    {members.map(member => (
      <MemberListItem member={member} key={member.id} />
    ))}
  </List>
);

export default MemberList;
