import React, { useState, useEffect } from 'react';
import { Typography, Box, Grid, Paper } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import axios from 'axios';
import TripInfoCard from './TripInfoCard';
import { makeStyles } from '@material-ui/core/styles';

// TODO: this should get access to the current user (and pass down to TripInfoCard to hide/show some fields. ex: only show user avatar, like trip if trip is created by someone else)

const Feed = ({ trips, count, page, onPageChange }) => {
  // const [trips, setTrips] = useState([]);
  // const [page, setPage] = useState(1);
  // const [count, setCount] = useState(0);
  // const [pageSize, setPageSize] = useState(3);

  // const handlePageChange = (e, page) => {
  //   setPage(page);
  // };

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/trip', { params: { page, pageSize } })
  //     .then(
  //       (res) => {
  //         console.log('got data from backend: ');
  //         console.log(res.data);
  //         const { trips, totalPages } = res.data;
  //         setTrips(trips);
  //         setCount(totalPages);
  //       },
  //       (err) => {
  //         console.log('error: ');
  //         console.log(err);
  //       }
  //     );
  // }, [page, pageSize]);
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
