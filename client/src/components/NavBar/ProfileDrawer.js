import React, {useState} from 'react';
import {Grid, Box, Button, Divider, makeStyles, Drawer} from '@material-ui/core';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ProfilePic from '../Profile/ProfilePic';

const useStyles = makeStyles({
    drawer: {
        width: 250,
        top: '64px',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: '20px 0px 0px 20px',
    },
    drawerTop: {
        display: 'flex',
        height: '20%',
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
    const [visibility, setVisibility] = useState(false);
    const [userName, setUserName] = useState("John Doe");

    const toggleDrawer = () => {
        setVisibility(true);
    };

    const closeDrawer = () => {
        setVisibility(false);
    }



    return (
        <div>
            <Box className={classes.accountContainer} onClick={toggleDrawer}>
                <ProfilePic size="small"/>
            </Box>
            <Drawer classes={{paper: classes.drawer}} variant="temporary" anchor="right" open={visibility} onClose={closeDrawer}>
                <Box className={classes.drawerTop} bgcolor="primary.main">
                    <h5 style={{marginLeft: 10, marginBottom: 10, marginTop: 'auto', fontSize: 25, color: 'white'}}>{userName}</h5>
                </Box>
                <Button style={{justifyContent: "flex-start"}}>Profile</Button>
                <Divider />
                <Button style={{justifyContent: "flex-start"}}>Account Settings</Button>
                <Divider />
                <Button style={{justifyContent: "flex-start"}}>Site Settings</Button>
                <Divider />
            </Drawer>
        </div>

    );
}

export default ProfileDrawer;