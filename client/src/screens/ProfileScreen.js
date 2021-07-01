import React, {useState} from 'react';
import {Box,  makeStyles, IconButton, Divider} from '@material-ui/core';
import NavBar from '../components/NavBar/NavBar';
import TitleBar from '../components/TitleBar';
import ProfilePic from '../components/Profile/ProfilePic';
import ProfileForm from '../components/Profile/ProfileForm';
import EditIcon from "@material-ui/icons/Edit";

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
        height: '1050px',
        width: '60%',
        border: '1px solid',
        borderColor: '#3DB8DA',
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '50px',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'relative',
        marginTop: '25px',
        marginLeft: '5%',
        marginRight: 'auto',
    },
    editButton: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        zIndex: '10',
        backgroundColor: 'white',
    },
    picContainer: {
        position: 'relative',
        display: 'flex',
        width: '160px',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        justify: "center",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: "20px 20px 0px 0px",
        height: '225px',
        marginTop: '-1px',
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
                    <Box className={classes.topContainer} bgcolor="primary.main" align="center">
                        <Box className={classes.title}>
                            <h1 style={{color:'white'}}>Edit Profile</h1>
                        </Box>
                        <Box className={classes.picContainer}>
                            <ProfilePic size="large"/>
                            <IconButton className={classes.editButton} component="label">
                                <input type="file" hidden />
                                <EditIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <ProfileForm />
                </Box>
            </Box>
        </div>
    );
}