import React, { useState, useEffect } from 'react';
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
  TextField,
} from '@material-ui/core';
import 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import ImageIcon from '@material-ui/icons/Image';
import AttachmentIcon from '@material-ui/icons/Attachment';
import ImageList from '../CreateTrip/ImageList';
import UserList from '../CreateTrip/UserList';
import CloseIcon from '@material-ui/icons/Close';
import SearchBar from '../SearchBar/SearchBar';
import LocationSearchBar from '../SearchBar/LocationSearchBar';
import TripItemTagList from '../CreateTripItem/TripItemTagList';
import TripItems from '../CreateTripItem/TripItems';

const maxTitleChars = 30;
const maxDescrChars = 300;

const useStyles = makeStyles((theme) => ({
  tripContainer: {
    maxWidth: '80%',
    maxHeight: '80%',
  },
  itemContainer: {
    maxWidth: '45%',
    maxHeight: '70%',
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
  formControl: {
    margin: '10px auto',
    variant: 'outlined',
  },
  popupContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    overflowY: 'scroll',
  },
}));

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

const initializeStartEndTime = () => {
  const current = new Date();
  const startEndTime =
    current.getFullYear() +
    '-' +
    ('0' + current.getMonth()).slice(-2) +
    '-' +
    ('0' + current.getDate()).slice(-2) +
    'T' +
    ('0' + current.getHours()).slice(-2) +
    ':' +
    ('0' + current.getMinutes()).slice(-2);
  return startEndTime;
};

const CreateForm = ({ formType, style, onSubmit, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleChars, setTitleChars] = useState(maxTitleChars);
  const [descrChars, setDescrChars] = useState(maxDescrChars);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userSearchInput, setUserSearchInput] = useState('');
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: 47.444,
    lng: -122.176,
  });
  const [selectedTripItem, setSelectedTripItem] = useState('');

  const classes = useStyles();

  // useEffect(() => {
  //   const startEndTime = initializeStartEndTime();
  //   setStartTime(startEndTime);
  //   setEndTime(startEndTime);
  //   console.log(startEndTime);
  // }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // TODO
    if (formType === 'trip') {
      console.log('submitted TRIP!');
      const data = {
        title,
        description,
        startTime,
        endTime,
        selectedFiles,
        selectedUsers,
      };
      console.log(data);
      onSubmit(data);
    } else if (formType === 'item') {
      console.log('submitted TRIP ITEM!');
      const data = {
        title,
        description,
        startTime,
        endTime,
        selectedFiles,
        address,
        coordinates,
        selectedTripItem,
      };
      console.log(data);
      onSubmit(data);
    }
  };

  const handleClosed = () => {
    setShowForm(false);
    onClose();
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
      setUserSearchResults(newUserSearchResults);
    } else {
      setUserSearchResults([]);
    }
  };

  const handleUserChosen = (e) => {
    const chosenUser = e.target.value;
    if (!selectedUsers.includes(chosenUser)) {
      setSelectedUsers((selectedUsers) => [...selectedUsers, chosenUser]);
    }
  };

  const handleUserRemoved = (removedUser) => {
    setSelectedUsers((selectedUsers) =>
      selectedUsers.filter((user) => user !== removedUser)
    );
  };

  const handleLocationSelect = async (selectedAddress, latLng) => {
    setAddress(selectedAddress);
    setCoordinates(latLng);
  };

  return (
    <div className={classes.popupContainer}>
      <div
        className={
          formType === 'trip'
            ? classes.tripContainer
            : formType === 'item'
            ? classes.itemContainer
            : ''
        }
        style={style}>
        {showForm && (
          <form onSubmit={handleFormSubmit}>
            <Paper className={classes.form}>
              <IconButton
                className={classes.closeIcon}
                aria-label='close form picture'
                component='span'
                onClick={handleClosed}>
                <CloseIcon />
              </IconButton>
              <FormControl fullWidth className={classes.formControl}>
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
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
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
              </FormControl>
              <FormControl fullWidth className={classes.formControl}>
                {/* <MuiPickersUtilsProvider utils={DateFnsUtils}> */}
                <Box display='flex' justifyContent='space-evenly'>
                  <TextField
                    id='datetime-local'
                    label='Start Time'
                    type='datetime-local'
                    defaultValue='2017-05-24T10:30' // TODO: change
                    // defaultValue={startTime}
                    style={{ margin: '10px' }}
                    onChange={(time) =>
                      setStartTime(time.nativeEvent.target.value)
                    }
                  />
                  <TextField
                    id='datetime-local'
                    label='End Time'
                    type='datetime-local'
                    defaultValue='2017-05-24T10:30'
                    // defaultValue={endTime}
                    style={{ margin: '10px' }}
                    onChange={(time) =>
                      setEndTime(time.nativeEvent.target.value)
                    }
                  />
                </Box>
                {/* </MuiPickersUtilsProvider> */}
              </FormControl>

              {formType === 'item' ? (
                <TripItemTagList
                  items={TripItems}
                  selectedItem={selectedTripItem}
                  onSelect={(id) => setSelectedTripItem(id)}
                  onRemove={() => setSelectedTripItem()}
                />
              ) : null}

              {selectedFiles.length > 0 ? (
                <ImageList
                  images={selectedFiles}
                  onRemove={handleFileRemoved}
                />
              ) : null}

              <FormControl fullWidth className={classes.formControl}>
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
                      <IconButton aria-label='add attachments' component='span'>
                        <ImageIcon />
                      </IconButton>
                    </label>
                  </Box>
                  <Button variant='contained' onClick={toggleSearchBar}>
                    {showSearchBar
                      ? 'Hide Search Bar'
                      : formType === 'trip'
                      ? 'Search Collaborators!'
                      : formType === 'item'
                      ? 'Search Location!'
                      : ''}
                  </Button>
                </Box>
              </FormControl>

              <FormControl className={classes.formControl}>
                {selectedUsers.length > 0 && (
                  <Typography>Click to Remove</Typography>
                )}
                {selectedUsers.length > 0 && (
                  <UserList
                    usernames={selectedUsers}
                    onUserRemoved={handleUserRemoved}
                  />
                )}
              </FormControl>

              {showSearchBar &&
                (formType === 'trip' ? (
                  <SearchBar
                    searchInput={userSearchInput}
                    onInputChange={handleSearchInput}
                    searchResults={userSearchResults}
                    onResultChosen={handleUserChosen}
                  />
                ) : formType === 'item' ? (
                  <LocationSearchBar
                    address={address}
                    onLocationChange={setAddress}
                    onLocationSelect={handleLocationSelect}
                  />
                ) : null)}

              {address && (
                <div>
                  Chosen address: {address} and latitude: {coordinates.lat} and
                  longitude: {coordinates.lng}
                </div>
              )}

              <FormControl fullWidth className={classes.formControl}>
                <Button fullWidth variant='contained' type='submit'>
                  {formType === 'trip'
                    ? 'Create Trip!'
                    : formType === 'item'
                    ? 'Create Trip Item!'
                    : ''}
                </Button>
              </FormControl>
            </Paper>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateForm;
