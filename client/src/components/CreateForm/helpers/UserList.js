import React from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';

// TODO: onUserRemoved is an OPTIONAL parameter! check for its existence before calling it!
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
            style={{ margin: '5px' }}>
            <Avatar onClick={() => onUserRemoved(username)}>
              {username.length && username[0].toUpperCase()}
            </Avatar>
            <Typography>{username}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default UserList;
