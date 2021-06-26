import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  InputAdornment,
  Paper,
  FormControl,
  OutlinedInput,
  Box,
  TextField,
} from '@material-ui/core';
import TripItemTagList from './TripItemTagList';
import TripItems from './TripItems';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: '500px',
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
    margin: '10px auto',
    variant: 'outlined',
  },
})(FormControl);

const maxTitleChars = 30;
const maxDescrChars = 300;

const CreateTripItem = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [location, setLocation] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [titleChars, setTitleChars] = useState(maxTitleChars);
  const [descrChars, setDescrChars] = useState(maxDescrChars);

  const classes = useStyles();

  const checkTitle = (val) => {
    setTitle(val);
    setTitleChars(maxTitleChars - val.length);
  };

  const checkDescription = (val) => {
    setDescription(val);
    setDescrChars(maxDescrChars - val.length);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // TODO
    console.log('data submitted!');
  };

  return (
    <div className={classes.container}>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <Paper className={classes.form}>
            <StyledFormControl fullWidth style={{ margin: 'auto' }}>
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
                rows={3}
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
              <Box display='flex' justifyContent='space-evenly'>
                <TextField
                  id='datetime-local'
                  label='Start Time'
                  type='datetime-local'
                  defaultValue='2017-05-24T10:30'
                  style={{ margin: '10px' }}
                  onChange={(time) => setStartTime(time)}
                />
                <TextField
                  id='datetime-local'
                  label='End Time'
                  type='datetime-local'
                  defaultValue='2017-05-24T10:30'
                  style={{ margin: '10px' }}
                  onChange={(time) => setEndTime(time)}
                />
              </Box>
            </StyledFormControl>

            <TripItemTagList
              items={TripItems}
              selectedItem={null}
              onSelect={null}
              onRemove={null}
            />
          </Paper>
        </form>
      )}
    </div>
  );
};

export default CreateTripItem;
