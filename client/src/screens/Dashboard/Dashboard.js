import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TripSearchBar from '../../components/SearchBar/TripSearchBar';
import Feed from '../../components/Feed/Feed';
import { Box } from '@material-ui/core';
import CreateFormButton from '../../components/CreateForm/CreateFormButton';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';


const useStyles = makeStyles({
	dashRoot: {
		height: '100%',
		display: 'flex',
    flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		background: 'radial-gradient(at top left, ' + theme.palette.primary.main + ', transparent 60%), ' + 
					'radial-gradient(at top right, ' + theme.palette.primary.light + ', transparent 70%), ' + 
					'radial-gradient(at bottom left, ' + theme.palette.secondary.light + ', transparent 70%), ' + 
					'radial-gradient(at bottom right, ' + theme.palette.secondary.main + ', transparent 90%)'
	}
});

const Dashboard = () => {
  const [trips, setTrips] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [pageSize, setPageSize] = useState(12);
  const [tripUpdate, setTripUpdate] = useState({});

  const classes = useStyles();

  const handlePageChange = (e, page) => {
    setPage(page);
  };

  const handleSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  // const dispatch = useDispatch();

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
  }, [page, pageSize, searchTitle, tripUpdate]);

  const handleSubmit = (data) => {
    setTripUpdate(data);
  };

  return (
    <Box className={classes.dashRoot}>
      <TripSearchBar
        searchInput={searchTitle}
        onInputChange={handleSearchTitle}
      />
      <Box display='flex' justifyContent='space-around'>
        <CreateFormButton
          formType='trip'
          onSuccess={handleSubmit}
          // onError={null}
          // onClose={null}
          tripId={null}
          onClick={() => {}}
        />
      </Box>
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
