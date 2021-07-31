import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Button, Paper, TextField } from '@material-ui/core';
import Expand from 'react-expand-animated';
import CloseIcon from '@material-ui/icons/Close';

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
  button: {
    width: 0,
    minWidth: '100%',
    height: '100%',
    fontSize: '1em',
    color: theme.palette.black,
    background: 'linear-gradient(160deg, ' + theme.palette.primary.main + ', ' + theme.palette.secondary.main + ')',
    '&:hover': {
      color: theme.palette.white,
      background: 'linear-gradient(160deg, ' + theme.palette.primary.dark + ', ' + theme.palette.secondary.dark + ')'
    }
  },
}));

const EditableContentButton = ({ buttonName, content, readOnly, onClick }) => {
  const [showContent, setShowContent] = useState(false);
  const classes = useStyles();

  const toggleShowContent = () => {
    onClick(!showContent);
    setShowContent((showContent) => !showContent);
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
        <Button className={classes.button}
          variant='contained'
          onClick={toggleShowContent}
          style={{ minWidth: '200px', margin: '20px'}}>
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
                onClick={toggleShowContent}>
                <CloseIcon />
              </IconButton>
              <TextField
                type='text'
                label={buttonName}
                defaultValue={content}
                inputProps={{ readOnly }}
                multiline
                rows={5}
                fullWidth
              />
            </Paper>
          </Box>
        </Expand>
      )}
    </Box>
  );
};

export default EditableContentButton;
