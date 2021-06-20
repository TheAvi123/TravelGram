import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Select,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
});

const SearchBar = ({
  searchInput,
  onInputChange,
  searchResults,
  onResultChosen,
}) => {
  const classes = useStyles();

  const customHandleClick = (e) => {
    console.log('in custom handle click: ');
    console.log(e.target.value);
  };

  return (
    <Box className={classes.container}>
      <FormControl variant='outlined'>
        <InputLabel htmlFor='search-bar'>Username</InputLabel>
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
      <Select
        multiple
        native
        onChange={onResultChosen}
        inputProps={{
          id: 'select-multiple-native',
        }}>
        {searchResults.map((searchedUser) => (
          <option
            key={searchedUser.username}
            value={searchedUser.username}
            onClick={customHandleClick}>
            {searchedUser.username}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SearchBar;
