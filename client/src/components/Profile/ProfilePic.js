import React, {useState} from 'react';
import {Box, IconButton, Avatar, Button, makeStyles, useTheme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import avatar from '../../images/avatar.jpg';

const useStyles = makeStyles(theme => ({
    large: {
        height: '150px',
        width: '150px',
    },
    editButton: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        zIndex: '10',
        backgroundColor: 'white',
    },
    container: {
      position: 'inherit',
        width: '160px',
    },
}));


export default function ProfilePic(props) {
    const classes = useStyles();

    const [editProfile, setEditProfile] = useState(true);

    return (
        <Box className={classes.container}>
            {editProfile &&
                <IconButton className={classes.editButton}>
                    <EditIcon />
                </IconButton>
            }
            <Avatar src={avatar} className={classes.large}/>
        </Box>
    );
}