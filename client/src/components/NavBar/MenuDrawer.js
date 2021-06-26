import React, {useState} from 'react';
import {Button, IconButton, makeStyles, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
   drawer: {
       width: 250,
   },
   link: {
       color: 'black',
       textDecoration: 'none',
   },
});

function MenuDrawer(props) {

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
            <IconButton ml={10} mr={20} onClick={toggleDrawer} >
                <MenuIcon/>
            </IconButton>
            <Drawer variant="temporary" open={visibility} onClose={closeDrawer}>
                <Button>Item A</Button>
                <Button>Item B</Button>
                <Button>Item C</Button>
            </Drawer>
        </div>

    );
}

export default MenuDrawer;