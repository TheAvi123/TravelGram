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
import CloseIcon from '@material-ui/icons/Close';
import Expand from 'react-expand-animated';

const useStyles = makeStyles({
  imageListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    margin: '20px auto',
    width: '80%',
    padding: '16px',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: '2px',
    right: '10px',
    padding: '0px',
  },
  cardContainer: {
    maxWidth: '200px',
    margin: '10px',
    position: 'relative',
  },
  media: {
    width: '100%',
    height: 'auto',
  },
  icon: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    padding: '0px',
  },
});

const TripImageListButton = ({ images, onRemove, onClick, buttonName }) => {
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
      {!showImageList && (
        <Button
          variant='contained'
          onClick={toggleShowImageList}
          style={{ maxWidth: '200px', margin: '30px auto' }}>
          {buttonName}
        </Button>
      )}
      {showImageList && (
        <Expand open={showImageList} duration={400}>
          <Paper className={classes.imageListContainer}>
            <IconButton
              className={classes.closeIcon}
              aria-label='close image list'
              component='span'
              onClick={toggleShowImageList}>
              <CloseIcon />
            </IconButton>
            {images.map((img, i) => {
              return (
                <Card className={classes.cardContainer} key={i}>
                  <IconButton
                    className={classes.icon}
                    aria-label='remove picture'
                    component='span'
                    onClick={() => onRemove(img)}>
                    <CloseIcon />
                  </IconButton>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    image={img}
                  />
                </Card>
              );
            })}
          </Paper>
        </Expand>
      )}
    </Box>
  );
};

export default TripImageListButton;
