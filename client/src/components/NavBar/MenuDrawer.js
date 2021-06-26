import React, {useState} from 'react';
import {Button, IconButton, makeStyles, Drawer} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../../theme';

const useStyles = makeStyles(theme => ({
   drawer: {
       width: 250,
       top: '64px',
       height: '60%',
       backgroundColor: 'white',
       borderRadius: '0px 20px 20px 0px',
   },
    topSpace: {
      height: '50px',
    },
   link: {
       color: '#75BEE7',
       textDecoration: 'none',
   },
}));

function MenuDrawer(props) {

    const classes = useStyles(theme);
    const [visibility, setVisibility] = useState(false);

    const toggleDrawer = () => {
        setVisibility(true);
    };

    const closeDrawer = () => {
        setVisibility(false);
    }



    return (
        <div>
            <IconButton ml={10} mr={20} onClick={toggleDrawer} color="primary">
                <MenuIcon/>
            </IconButton>
            <Drawer classes={{paper: classes.drawer}} variant="temporary" open={visibility} onClose={closeDrawer}>
                <div className={classes.topSpace}></div>
                <Button style={{justifyContent: "flex-start"}}>Dashboard</Button>
                <Button style={{justifyContent: "flex-start"}}>Your Trips</Button>
                <Button style={{justifyContent: "flex-start"}}>Something</Button>
            </Drawer>
        </div>

    );
}

export default MenuDrawer;