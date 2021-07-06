import React, {useState} from 'react';
import {Box, IconButton, Avatar, Button, makeStyles, useTheme} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import avatar from '../../images/avatar.jpg';
import ProfileCard from './ProfileCard'

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

    const toggleCard = (event) => {
        setCardVisibility(!cardVisibility);
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
            {cardVisibility && <ProfileCard onChange={setCardVisibility}/>}
        </Box>
    );
}