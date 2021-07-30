import React, {useState} from 'react';
import {Grid, Box, Button, Divider, makeStyles, Drawer} from '@material-ui/core';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ProfilePic from '../Profile/ProfilePic';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout} from '../../store/slices/authSlice';
import theme from '../../theme';

const useStyles = makeStyles({
    drawer: {
        width: 250,
        top: '64px',
        height: '60%',
        backgroundColor: theme.palette.background,
        borderRadius: '20px 0px 0px 20px',
    },
    drawerTop: {
        display: 'flex',
        height: '25%',
        align: 'flex-end',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
    accountContainer: {
        position: 'inherit',
        display: 'flex',
        maxWidth: '30px',
        justify: 'flex-end',
    },
});

function ProfileDrawer(props) {

    const classes = useStyles();

    const dispatch = useDispatch();

    const [visibility, setVisibility] = useState(false);

    const user = useSelector((state) => state.get('auth').user);
    let id = user.id;

    const toggleDrawer = () => {
        setVisibility(true);
    };

    const closeDrawer = () => {
        setVisibility(false);
    }

    const logOut = () => {
        dispatch(logout());
        window.location = '/';
    }

    return (
        <div>
            <Box className={classes.accountContainer} onClick={toggleDrawer}>
                <ProfilePic size="small" tempImage={props.user.icon}/>
            </Box>
            <Drawer classes={{paper: classes.drawer}} variant="temporary" anchor="right" open={visibility} onClose={closeDrawer}>
                <Box className={classes.drawerTop} bgcolor="primary.main">
                    <ProfilePic size="medium" clickable="true" userID={user.id}/>
                    <h5 style={{marginLeft: 10, marginBottom: 10, marginTop: 'auto', fontSize: 25, color: 'white'}}>{props.user.username}</h5>
                </Box>
                <Link to="/profile"><Button style={{justifyContent: "flex-start"}} onClick={closeDrawer}>Profile</Button></Link>
                <Divider />
                <Button style={{justifyContent: "flex-start"}} onClick={closeDrawer}>Account Settings</Button>
                <Divider />
                <Button style={{justifyContent: "flex-start"}} onClick={closeDrawer}>Site Settings</Button>
                <Divider />
                <Button style={{justifyContent: "flex-start", color: "red"}} onClick={logOut}>Log Out</Button>
                <Divider />
            </Drawer>
        </div>

    );
}

export default ProfileDrawer;