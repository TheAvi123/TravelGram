import React, {useState} from 'react';
import {Box, Menu, MenuItem, Button, makeStyles, useTheme} from '@material-ui/core';
import NavBar from '../components/NavBar/NavBar';
import TitleBar from '../components/TitleBar';
import ProfilePic from '../components/Profile/ProfilePic';
import ProfileForm from '../components/Profile/ProfileForm';

const useStyles = makeStyles({
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
        height: '1100px',
        width: '60%',
        border: '1px solid',
        borderColor: '#75BEE7',
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '50px',
        paddingLeft: '50px',
        paddingRight: '50px',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        width: '100%',
    },
});

export default function ProfileScreen(props) {
    const classes = useStyles();

    return (
        <div>
            <TitleBar />
            <NavBar />
            <Box className={classes.screen}>
                <Box className={classes.container}>
                    <Box className={classes.title}>
                        <h1 style={{color:'darkgrey'}}>Edit Profile</h1>
                    </Box>
                    <ProfilePic />
                    <ProfileForm />
                </Box>
            </Box>
        </div>
    );
}