import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: '40px',
    maxWidth: '50%',
  },
});

const TripSearchBar = ({ searchInput, onInputChange }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='search-bar'>Title, Dates, Location</InputLabel>
        <OutlinedInput
          id='search-bar-input'
          value={searchInput}
          onChange={onInputChange}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                aria-label='search-icon'
                onClick={null}
                onMouseDown={null}
                edge='end'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          labelWidth={60}
        />
      </FormControl>
    </Box>
  );
};

export default TripSearchBar;
