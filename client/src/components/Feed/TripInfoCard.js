import React, { useState, useEffect } from 'react';
import { Typography, Card, Button, CardActionArea } from '@material-ui/core';
import UserList from '../CreateForm/helpers/UserList';

const TripInfoCard = ({ trip }) => {
  return (
    <Card style={{ maxWidth: '300px', padding: '10px' }}>
      <CardActionArea>
        <Typography>{trip.title}</Typography>
        <Typography>
          {trip.startTime} - {trip.endTime}
        </Typography>
        {trip.selectedUsers.length > 0 && (
          <UserList usernames={trip.selectedUsers} onUserRemoved={null} />
        )}
      </CardActionArea>
      <Button>View Trip</Button>
    </Card>
  );
};

export default TripInfoCard;
