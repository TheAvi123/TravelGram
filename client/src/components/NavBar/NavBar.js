import React, {useEffect, useState} from 'react';
import {Box, Menu, MenuItem, Button, makeStyles, Divider} from '@material-ui/core';
import MenuDrawer from './MenuDrawer';
import ProfileDrawer from './ProfileDrawer';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import axios from "axios";
import theme from '../../theme';

export default function NavBar(props) {

    const useStyles = makeStyles({
        root: {
            position: 'sticky',
            top: '0px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            justifyContent: 'flex-start',
            background: props.darkMode ? theme.palette.background : 'radial-gradient(at top left, ' + theme.palette.primary.dark + ', transparent 60%), ' +
            'radial-gradient(at top right, ' + theme.palette.primary.main + ', transparent 70%), ' +
            'radial-gradient(at bottom left, ' + theme.palette.secondary.main + ', transparent 70%), ' +
            'radial-gradient(at bottom right, ' + theme.palette.secondary.dark + ', transparent 90%)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        },
        accountButton: {
            display: 'flex',
            marginLeft: 'auto',
            marginRight: '15px',
            cursor: 'pointer',
        },
        signInButtonContainer: {
            position: 'sticky',
            top: '0px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            height: '40px',
            justifyContent: 'flex-end',
    
        },
        signInButton: {
            marginRight: '20px',
        },
        links: {
            marginLeft: '20px',
            cursor: 'pointer',
        }
    });

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [loggedIn, setLoggedIn] = useState(true);

    let user = useSelector((state) => state.get('auth').user);
    if(!user.id && localStorage.getItem('user')) user = JSON.parse(localStorage.getItem('user'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box>
            <Box bgcolor="white" borderBottom={1} borderColor="primary.main">
                {loggedIn &&
                <div className={classes.root}>
                    <MenuDrawer />
                    <Divider orientation='vertical' flexItem />
                    <Button className={classes.links} onClick={handleClick} color="primary">
                        Popular Trips
                    </Button>
                    <Menu
                        id="menu-1"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                        transformOrigin={{horizontal: "left"}}
                    >
                        <MenuItem onClick={handleClose}>Vancouver Island Trip</MenuItem>
                        <MenuItem onClick={handleClose}>Seattle Trip</MenuItem>
                        <MenuItem onClick={handleClose}>Sunshine Coast Trip</MenuItem>
                    </Menu>
                    <Button className={classes.links} color="primary">
                        Explore
                    </Button>
                    <Button className={classes.links} color="primary">
                        NEW TRIP
                    </Button>
                    <Box className={classes.accountButton}>
                        <ProfileDrawer user={user}/>
                    </Box>
                </div>
                }
                {!loggedIn &&
                    <Box className={classes.signInButtonContainer}>
                        <Button className={classes.signInButton} color="primary">Sign In</Button>
                    </Box>
                }
            </Box>
        </Box>
    );
}
