import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Button, Paper, TextField } from '@material-ui/core';
import Expand from 'react-expand-animated';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px auto',
    width: '500px',
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

const EditableContentButton = ({
  buttonName,
  content,
  readOnly,
  onClick,
  tripId,
  onEdit,
}) => {
  const [showContent, setShowContent] = useState(false);
  const classes = useStyles();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(content);
  }, [content]);

  const toggleShowContent = () => {
    onClick(!showContent);
    setShowContent((showContent) => !showContent);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleEdit = async () => {
    try {
      const res = await axios.patch(`http://localhost:3001/trip/${tripId}`, {
        description: value,
      });
      onEdit(res.data);
    } catch (err) {
      const errorMsg = err.response.data;
    }
    toggleShowContent();
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!showContent && (
        <Button
          variant='contained'
          onClick={toggleShowContent}
          style={{ maxWidth: '200px', margin: '30px auto' }}>
          {buttonName}
        </Button>
      )}
      {showContent && (
        <Expand open={showContent} duration={400}>
          <Box className={classes.container}>
            <Paper className={classes.form}>
              <IconButton
                className={classes.closeIcon}
                aria-label='close content'
                component='span'
                onClick={readOnly ? toggleShowContent : handleEdit}>
                <CloseIcon />
              </IconButton>
              <TextField
                type='text'
                label={buttonName}
                inputProps={{ readOnly }}
                fullWidth
                value={value}
                onChange={handleChange}
              />
            </Paper>
          </Box>
        </Expand>
      )}
    </Box>
  );
};

export default EditableContentButton;
