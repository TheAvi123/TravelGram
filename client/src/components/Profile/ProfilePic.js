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

    const [cardVisibility, setCardVisibility] = useState(false);
    const [userInfo, setUserInfo] = useState({});

    const id = "60f61319da53d5843ea69a8b";

    const toggleCard = (event) => {
        if (!cardVisibility) {
            axios.get(`http://localhost:3001/users/profile/${id}`)
                .then((res) => {
                    setUserInfo(res.data);
                    setCardVisibility(true)});
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

    return (
        <Box className={classes.container}>
            {pic}
            {cardVisibility && <ProfileCard onChange={setCardVisibility} info={userInfo}/>}
        </Box>
    );
}