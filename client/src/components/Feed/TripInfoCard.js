import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Typography,
  Card,
  Button,
  CardActionArea,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import UserList from '../CreateForm/helpers/UserList';

const useStyles = makeStyles({
  cardMedia: {
    height: '100px',
    width: 'auto',
    padding: '10px',
  },
});

const TripInfoCard = ({ trip }) => {
  const classes = useStyles();
  const startDate = new Date(trip.startTime).toLocaleDateString();
  const endDate = new Date(trip.endTime).toLocaleDateString();
  let history = useHistory();
  let cardImageIndex;
  if (trip.images && trip.images.length) {
    cardImageIndex = Math.floor(Math.random() * (trip.images.length - 1));
  }
  return (
    <Card style={{ maxWidth: '300px', maxHeight: '400px', padding: '10px' }}>
      <CardActionArea>
        <Typography gutterBottom variant='h5' component='h2'>
          {trip.title}
        </Typography>
        <Typography color='textSecondary'>
          {startDate} - {endDate}
        </Typography>
        {trip.images.length > 0 && (
          <CardMedia
            className={classes.cardMedia}
            component='img'
            image={trip.images[cardImageIndex]}
          />
        )}
        {trip.selectedUsers.length > 0 && (
          <UserList usernames={trip.selectedUsers} onUserRemoved={null} />
        )}
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() =>
            history.push({ pathname: `/trip/${trip.title}`, state: trip })
          }>
          View Trip
        </Button>
      </CardActions>
    </Card>
  );
};

export default TripInfoCard;
