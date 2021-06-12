import React, {useState} from 'react';
import {Button, IconButton, makeStyles, Drawer} from '@material-ui/core';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles({
    drawer: {
        width: 250,
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
            <IconButton onClick={toggleDrawer}>
                <AccountCircleIcon />
            </IconButton>
            <Drawer variant="temporary" anchor="right" open={visibility} onClose={closeDrawer}>
                <Button>Item A</Button>
                <Button>Item B</Button>
                <Button>Item C</Button>
            </Drawer>
        </div>

    );
}

export default ProfileDrawer;