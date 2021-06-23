import React, {useState} from 'react';
import {Box, Menu, MenuItem, Button, makeStyles, useTheme} from '@material-ui/core';
import NavBar from '../components/NavBar/NavBar';
import TitleBar from '../components/TitleBar';
import ProfilePic from '../components/Profile/ProfilePic';

const useStyles = makeStyles(theme => ({
    screen: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignContent: 'center',
        alignItems: 'center',
        justify: 'center',

    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '600px',
        width: '75%',
        backgroundColor: 'lightgrey',
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '30px',
        paddingLeft: '50px',
        paddingRight: '50px',
    },
}));

export default function ProfileScreen(props) {
    const classes = useStyles();

    return (
        <div>
            <TitleBar />
            <NavBar />
            <Box className={classes.screen}>
                <Box className={classes.container}>
                    <h1>My Profile</h1>
                    <ProfilePic />
                </Box>
            </Box>
        </div>
    );
}