import React from 'react';
import { Box } from '@material-ui/core';

const ImageCard = ({ inputImg }) => {
  return (
    <Box>
      <img
        src={URL.createObjectURL(inputImg)}
        width='70px'
        height='70px'
        position='relative'
        display='block'></img>
    </Box>
  );
};

export default ImageCard;
