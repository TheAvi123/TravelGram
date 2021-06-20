import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';

const UserList = ({ usernames, onUserRemoved }) => {
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='flex-start'>
      {usernames.map((username, i) => {
        return (
          <Box
            key={i}
            display='flex'
            flexDirection='column'
            flexWrap='wrap'
            style={{ margin: '5px' }}
            onDoubleClick={() => onUserRemoved(username)}>
            <Avatar>{username.length && username[0].toUpperCase()}</Avatar>
            <Typography>{username}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default UserList;
