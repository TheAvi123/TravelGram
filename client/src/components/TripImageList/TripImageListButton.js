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

const useStyles = makeStyles({});

const TripImageListButton = ({
  images,
  onRemove,
  onClick,
  shownButtonName,
  hiddenButtonName,
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
      <Button
        variant='contained'
        onClick={toggleShowImageList}
        style={{ maxWidth: '200px', margin: '30px auto' }}>
        {showImageList ? hiddenButtonName : shownButtonName}
      </Button>
      {showImageList && (
        <Expand open={showImageList} duration={1000}>
          <TripImageList
            images={images}
            onRemove={onRemove}
            onClose={toggleShowImageList}
          />
        </Expand>
      )}
    </Box>
  );
};

export default TripImageListButton;
