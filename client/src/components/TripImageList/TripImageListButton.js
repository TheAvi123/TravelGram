import React, { useState } from 'react';
import {
  Box,
  Card,
  CardMedia,
  IconButton,
  makeStyles,
  Button,
  Paper,
} from '@material-ui/core';
import Expand from 'react-expand-animated';
import TripImageList from './TripImageList';

const useStyles = makeStyles((theme) => ({
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

const TripImageListButton = ({
  images,
  onRemove,
  onClick,
  shownButtonName,
  hiddenButtonName,
  disabled,
  isOwner,
}) => {
  const classes = useStyles();
  const [showImageList, setShowImageList] = useState(false);

  const toggleShowImageList = () => {
    onClick(!showImageList);
    setShowImageList((showImageList) => !showImageList);
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button className={classes.button}
        variant='contained'
        onClick={toggleShowImageList}
        style={{ minWidth: '200px', margin: '20px'}}
        disabled={disabled}>
        {showImageList ? hiddenButtonName : shownButtonName}
      </Button>
      {showImageList && (
        <Expand open={showImageList} duration={1000}>
          <TripImageList
            images={images}
            onRemove={onRemove}
            onClose={toggleShowImageList}
            isOwner={isOwner}
          />
        </Expand>
      )}
    </Box>
  );
};

export default TripImageListButton;
