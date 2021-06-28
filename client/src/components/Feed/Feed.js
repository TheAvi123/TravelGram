import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import TripInfoCard from './TripInfoCard';
import { makeStyles } from '@material-ui/core/styles';

// TODO: this should get access to the current user (and pass down to TripInfoCard to hide/show some fields. ex: only show user avatar, like trip if trip is created by someone else)

const Feed = ({ trips, count, page, onPageChange }) => {
  return (
    <Box>
      <Grid container spacing={4} align='center'>
        {trips.map((trip) => (
          <Grid item xs={4}>
            <TripInfoCard trip={trip} />
          </Grid>
        ))}
      </Grid>
      <Box
        style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>
        <Pagination count={count} page={page} onChange={onPageChange} />
      </Box>
    </Box>
  );
};

export default Feed;
