import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Avatar,
  makeStyles,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ImageIcon from '@material-ui/icons/Image';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: '100px',
    margin: '10px',
    position: 'relative',
  },
  media: {
    height: '70px',
  },
  icon: {
    position: 'absolute',
    top: '1px',
    right: '1px',
    padding: '0px',
  },
});

const ImageList = ({ images, onRemove }) => {
  const classes = useStyles();
  return (
    <Box display='flex' flexWrap='wrap' justifyContent='flex-start'>
      {images.map((img, i) => {
        return (
          <Card className={classes.cardContainer} key={i}>
            <IconButton
              className={classes.icon}
              aria-label='upload picture'
              component='span'
              onClick={() => onRemove(img)}>
              <CloseIcon />
            </IconButton>
            <CardMedia
              className={classes.media}
              component='img'
              image={URL.createObjectURL(img)}
            />
          </Card>
        );
      })}
    </Box>
  );
};

export default ImageList;
