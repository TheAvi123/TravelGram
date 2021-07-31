import React, {useEffect, useState} from 'react';
import {Box, Avatar, makeStyles} from '@material-ui/core';
import avatar from '../../images/avatar.jpg';
import ProfileCard from './ProfileCard'
import axios from "axios";
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
    large: {
        height: '150px',
        width: '150px',
        borderColor: 'black',
        borderWidth: '10px'
    },
    medium: {
        height: '100px',
        width: '100px',
        borderColor: 'black',
        borderWidth: '10px'
    },
    small: {
      height: '30px',
      width: '30px',
      borderColor: 'black',
      borderWidth: '10px'
    },
    container: {
      position: 'inherit',
      borderColor: 'black',
      borderWidth: '10px'
    },
}));

// Props:
// size ["small", "medium", "large"]
// clickable [true, or false] (to enable profile snippet toggling)
// userID ["string"] (to get pic and info)
// tempImage ["url"] (for image upload preview)
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

    let pic;
    if (props.tempImage) {
        pic = <Avatar src={props.tempImage} className={classes[props.size]}
                      style={{border: '6px solid black'}}/>
    } else {
        if (props.clickable) {
            pic = <Avatar src={userInfo.photo_id} className={classes[props.size]} style={{cursor: 'pointer'}}
                          onClick={toggleCard} style={{border: '6px solid black'}}/>
        } else {
            pic = <Avatar src={userInfo.photo_id} className={classes[props.size]} style={{border: '6px solid black'}}/>
        }
    }

    let defaultPic = <Avatar className={classes[props.size]}/>;

    if(loading) {
        return (
            <Box className={classes.container}>
                {defaultPic}
                {cardVisibility && <ProfileCard onChange={setCardVisibility} info={userInfo} userID={id}/>}
            </Box>
        );
    } else {
        return (
            <Box className={classes.container}>
                {pic}
                {cardVisibility && <ProfileCard onChange={setCardVisibility} info={userInfo} userID={id}/>}
            </Box>
        );
    }
}