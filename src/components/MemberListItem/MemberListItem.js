import React from 'react';
import ListItem from '@material-ui/core/ListItem';

import HashLink from '../HashLink';

const MemberListItem = ({member}) => (
  <ListItem>
    <p>{member.id}</p>
    <HashLink hash={member.justification} />
  </ListItem>
);

export default MemberListItem;
