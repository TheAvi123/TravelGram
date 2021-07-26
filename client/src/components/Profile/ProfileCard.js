import React, {useEffect, useState} from 'react';
import {Box, Button, makeStyles, Grid, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axios from "axios";
import ProfilePic from './ProfilePic';

const useStyles = makeStyles({
    background: {
        display: 'flex',
        justifyContent:'center',
        position: 'fixed',
        top: '0px',
        left: '0px',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 50%)',
        zIndex: '5',
    },
    card: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        height: '500px',
        width: '400px',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    top: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '100px',
        borderRadius: '20px 20px 0px 0px',
        justifyContent: 'center',
    },
    pic: {
        display:'flex',
        justifyContent: 'center',
        position: 'relative',
        marginTop: '-50px',
        width: '100%',
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        marginTop: '10px',
    },
    email: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        overFlow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        color: 'blue',
    },
    address: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        color: 'grey',
        fontSize: 'small',
        marginTop: '5px',
        paddingLeft: '20px',
        paddingRight: '20px',
    },
    about: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        width: '100%',
        fontSize: 'small',
        marginTop: '20px',
        paddingLeft: '50px',
        paddingRight: '50px',
    },
});

export default function ProfileCard(props) {

    const classes = useStyles();

    const userInfo = props.info;


    return (
        <Box className={classes.background} onClick={() => props.onChange(false)}>
            <Box className={classes.card} onClick={(e) => e.stopPropagation()}>
                <Box className={classes.top} bgcolor="primary.main"/>
                <Box className={classes.pic}>
                    <ProfilePic clickable={false} size="medium" userID="60fcde5f6f567e4e1d872bca"/>
                </Box>
                <Box className={classes.name}>
                    <h1>{userInfo.username}</h1>
                </Box>
                <Box className={classes.email}>
                    <Typography noWrap>{userInfo.email}</Typography>
                </Box>
                <Box className={classes.address}>
                    <span>{userInfo.city} · {userInfo.state} · {userInfo.country}</span>
                </Box>
                <Box className={classes.about}>
                    <span>{userInfo.about}</span>
                </Box>
            </Box>
        </Box>
    );
}

