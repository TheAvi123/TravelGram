import React, {useEffect, useState} from 'react';
import {Box, IconButton, Avatar, Button, makeStyles, useTheme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import avatar from '../../images/avatar.jpg';
import ProfileCard from './ProfileCard'
import axios from "axios";

const useStyles = makeStyles(theme => ({
    large: {
        height: '150px',
        width: '150px',
    },
    medium: {
        height: '100px',
        width: '100px',
    },
    small: {
      height: '30px',
      width: '30px',
    },
    container: {
      position: 'inherit',
    },
}));

// Props:
// size [small, medium, large]
// clickable [true, or false] (to enable profile snippet toggling)
export default function ProfilePic(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [cardVisibility, setCardVisibility] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const id = "60fcde5f6f567e4e1d872bca";

    useEffect(() => {
        axios.get(`http://localhost:3001/users/profile/${id}`)
            .then(res => {
                setUserInfo(res.data);
                setLoading(false);
            })
    }, []);


    // const toggleCard = (event) => {
    //     if (!cardVisibility) {
    //         axios.get(`http://localhost:3001/users/profile/${id}`)
    //             .then((res) => {
    //                 setUserInfo(res.data);
    //                 setCardVisibility(true)});
    //     } else {
    //         setCardVisibility(false);
    //     }
    // }

    const toggleCard = (event) => {
        if (!cardVisibility) {
            setCardVisibility(true);
        } else {
            setCardVisibility(false);
        }
    }

    let pic;
    if (props.clickable) {
        pic = <Avatar src={avatar} className={classes[props.size]} style={{cursor: 'pointer'}} onClick={toggleCard}/>
    } else {
        pic = <Avatar src={avatar} className={classes[props.size]}/>
    }

    let defaultPic = <Avatar src={avatar} className={classes[props.size]}/>;

    if(loading) {
        return (
            <Box className={classes.container}>
                {defaultPic}
                {cardVisibility && <ProfileCard onChange={setCardVisibility} info={userInfo}/>}
            </Box>
        );
    } else {
        return (
            <Box className={classes.container}>
                {pic}
                {cardVisibility && <ProfileCard onChange={setCardVisibility} info={userInfo}/>}
            </Box>
        );
    }
}