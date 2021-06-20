import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  InputAdornment,
  Paper,
  FormControl,
  OutlinedInput,
  Box,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ImageIcon from '@material-ui/icons/Image';
import ImageList from './ImageList';
import UserList from './UserList';
import CloseIcon from '@material-ui/icons/Close';
import SearchBar from '../SearchBar/SearchBar';

const maxTitleChars = 30;
const maxDescrChars = 300;

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  form: {
    padding: '16px',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: '2px',
    right: '10px',
    padding: '0px',
  },
}));

const StyledFormControl = withStyles({
  root: {
    margin: '10px',
    variant: 'outlined',
  },
})(FormControl);

const allUsers = [
  {
    username: 'angola',
    email: 'dummyemail1',
  },
  {
    username: 'anguilla',
    email: 'dummyemail2',
  },
  {
    username: 'antarctica',
    email: 'dummyemail11',
  },
  {
    username: 'antarctina',
    email: 'dummyemail12',
  },
  {
    username: 'anguralla',
    email: 'dummyemail3',
  },
];

const CreateTrip = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleChars, setTitleChars] = useState(maxTitleChars);
  const [descrChars, setDescrChars] = useState(maxDescrChars);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [userSearchResults, setUserSearchResults] = useState([]);

  const classes = useStyles();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // TODO
    console.log('data submitted!');
  };

  const handleClosed = () => {
    setShowForm(false);
  };

  const checkTitle = (val) => {
    setTitle(val);
    setTitleChars(maxTitleChars - val.length);
  };

  const checkDescription = (val) => {
    setDescription(val);
    setDescrChars(maxDescrChars - val.length);
  };

  const handleFileSelected = async (e) => {
    const fileArray = Array.from(e.target.files ?? []);
    setSelectedFiles(fileArray);
  };

  const handleFileRemoved = (fileToRemove) => {
    setSelectedFiles((files) => files.filter((file) => file !== fileToRemove));
  };

  const toggleSearchBar = () => {
    setShowSearchBar((modal) => !modal);
  };

  const handleSearchInput = (e) => {
    const searchTerm = e.target.value;
    setUserSearchInput(searchTerm);
    if (searchTerm) {
      const newUserSearchResults = allUsers.filter((user) => {
        const userInfo = user.username.concat(' ', user.email);
        return userInfo.toLowerCase().includes(searchTerm.toLowerCase());
      });
      // console.log('search results: ');
      // console.log(newUserSearchResults);
      setUserSearchResults(newUserSearchResults);
    } else {
      console.log('search results empty');
      setUserSearchResults([]);
    }
  };

  const handleUserChosen = (e) => {
    const chosenUser = e.target.value;
    console.log('user chosen: ');
    console.log(chosenUser);
    // if the clicked user is in selected array, remove it
    // if it's not in the array, add it!
    setSelectedUsers((selectedUsers) => [...selectedUsers, chosenUser]);
  };

  const handleUserRemoved = (removedUser) => {
    setSelectedUsers((selectedUsers) =>
      selectedUsers.filter((user) => user.username !== removedUser)
    );
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <Paper className={classes.form}>
            <IconButton
              className={classes.closeIcon}
              aria-label='upload picture'
              component='span'
              onClick={handleClosed}>
              <CloseIcon />
            </IconButton>
            <StyledFormControl fullWidth>
              <OutlinedInput
                id='title'
                value={title}
                inputProps={{
                  maxLength: maxTitleChars,
                }}
                onChange={(e) => checkTitle(e.target.value)}
                endAdornment={
                  <InputAdornment position='end'>
                    {titleChars}/{maxTitleChars}
                  </InputAdornment>
                }
                placeholder='Title'
              />
            </StyledFormControl>
            <StyledFormControl fullWidth>
              <OutlinedInput
                id='description'
                value={description}
                inputProps={{
                  maxLength: maxDescrChars,
                }}
                multiline={true}
                rows={6}
                onChange={(e) => checkDescription(e.target.value)}
                endAdornment={
                  <InputAdornment position='end'>
                    {descrChars}/{maxDescrChars}
                  </InputAdornment>
                }
                placeholder='Description'
              />
            </StyledFormControl>
            <StyledFormControl fullWidth>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Box display='flex' justifyContent='space-evenly'>
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='Start Date'
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    style={{ margin: '10px' }}
                  />
                  <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    id='date-picker-inline'
                    label='End Date'
                    value={endDate}
                    onChange={(date) => setEndDate(date)}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    style={{ margin: '10px' }}
                  />
                </Box>
              </MuiPickersUtilsProvider>
            </StyledFormControl>

            {selectedFiles.length > 0 ? (
              <ImageList images={selectedFiles} onRemove={handleFileRemoved} />
            ) : null}

            <StyledFormControl fullWidth>
              <Box display='flex' justifyContent='space-between'>
                <Box display='flex'>
                  <input
                    accept='image/*'
                    id='icon-button-file'
                    type='file'
                    multiple
                    onChange={handleFileSelected}
                    style={{ display: 'none' }}
                  />
                  <label htmlFor='icon-button-file'>
                    <IconButton aria-label='upload picture' component='span'>
                      <ImageIcon />
                    </IconButton>
                  </label>
                </Box>
                <Button variant='contained' onClick={toggleSearchBar}>
                  {showSearchBar ? 'Hide Search Bar' : 'Collaborate!'}
                </Button>
              </Box>
            </StyledFormControl>

            <StyledFormControl>
              {selectedUsers.length > 0 ? (
                <UserList
                  usernames={selectedUsers}
                  onUserRemoved={handleUserRemoved}
                />
              ) : null}
            </StyledFormControl>

            {showSearchBar && (
              <SearchBar
                searchInput={userSearchInput}
                onInputChange={handleSearchInput}
                searchResults={userSearchResults}
                onResultChosen={handleUserChosen}
              />
            )}

            <StyledFormControl fullWidth>
              <Button fullWidth variant='contained'>
                Create Trip!
              </Button>
            </StyledFormControl>
          </Paper>
        </form>
      )}
    </div>
  );
};

export default CreateTrip;
