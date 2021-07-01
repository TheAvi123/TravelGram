import React, {useState} from 'react';
import {Box, IconButton, Avatar, Button, makeStyles, useTheme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import avatar from '../../images/avatar.jpg';

const useStyles = makeStyles(theme => ({
    large: {
        height: '150px',
        width: '150px',
    },
    small: {
      height: '30px',
      width: '30px',
    },
    container: {
      position: 'inherit',
        width: '160px',
    },
}));


export default function ProfilePic(props) {
    const classes = useStyles();

    return (
        <Box className={classes.container}>
            <Avatar src={avatar} className={classes[props.size]}/>
        </Box>
    );
}