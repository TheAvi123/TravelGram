import React, {useState} from 'react';
import {Button, IconButton, makeStyles, Drawer} from '@material-ui/core';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
    drawer: {
        width: 250,
        top: '64px',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: '20px 0px 0px 20px',
    },
    link: {
        color: 'black',
        textDecoration: 'none',
    },
});

function ProfileDrawer(props) {

    const classes = useStyles();
    const [visibility, setVisibility] = useState(false);

    const toggleDrawer = () => {
        setVisibility(true);
    };

    const closeDrawer = () => {
        setVisibility(false);
    }



    return (
        <div>
            <IconButton onClick={toggleDrawer} color="primary">
                <AccountCircleIcon />
            </IconButton>
            <Drawer classes={{paper: classes.drawer}} variant="temporary" anchor="right" open={visibility} onClose={closeDrawer}>
                <h5 style={{marginLeft: 10}}>User Name</h5>
                <Button style={{justifyContent: "flex-start"}}>Profile</Button>
                <Button style={{justifyContent: "flex-start"}}>Account Settings</Button>
                <Button style={{justifyContent: "flex-start"}}>Site Settings</Button>
            </Drawer>
        </div>

    );
}

export default ProfileDrawer;