import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TripSearchBar from '../../components/SearchBar/TripSearchBar';
import Feed from '../../components/Feed/Feed';
import { Box } from '@material-ui/core';

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(12);

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/trip', {
        params: { page, pageSize, searchTitle },
      })
      .then(
        (res) => {
          console.log('got data from backend: ');
          console.log(res.data);
          const { trips, pageCount } = res.data;
          setTrips(trips);
          setPageCount(pageCount);
        },
        (err) => {
          console.log('error: ');
          console.log(err);
        }
      );
  }, [page, pageSize, searchTitle]);

  return (
    <Box>
      <TripSearchBar
        searchInput={searchTitle}
        onInputChange={handleSearchTitle}
      />
      <Feed
        trips={trips}
        count={pageCount}
        page={page}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default Dashboard;