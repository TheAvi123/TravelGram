import React, {useEffect, useState} from 'react';
import {Box, Avatar, makeStyles} from '@material-ui/core';
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
// size ["small", "medium", "large"]
// clickable [true, or false] (to enable profile snippet toggling)
// userID ["string"] (to get pic and info)
export default function ProfilePic(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [cardVisibility, setCardVisibility] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const id = props.userID;


    useEffect(() => {
        axios.get(`http://localhost:3001/user/profile/${id}`)
            .then(res => {
                setUserInfo(res.data);
                setLoading(false);
            })
    }, []);

    const toggleCard = (event) => {
        if (!cardVisibility) {
            setCardVisibility(true);
        } else {
            setCardVisibility(false);
        }
    }

    let url = "https://firebasestorage.googleapis.com/v0/b/travelgram-158fa.appspot.com/o/880f9e38-80bf-4b41-bc95-a0016edd91a7.png?alt=media&token=76930592-38dc-46fd-b1fd-917fd66ca6bf";
    let pic;
    if (props.clickable) {
        pic = <Avatar src={url} className={classes[props.size]} style={{cursor: 'pointer'}} onClick={toggleCard}/>
    } else {
        pic = <Avatar src={url} className={classes[props.size]}/>
    }

    let defaultPic = <Avatar className={classes[props.size]}/>;

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