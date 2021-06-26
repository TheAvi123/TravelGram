import React, {useState} from 'react';
import {Box, Menu, MenuItem, Button, makeStyles, useTheme} from '@material-ui/core';
import MenuDrawer from './MenuDrawer';
import ProfileDrawer from './ProfileDrawer';

const useStyles = makeStyles({
    root: {
        position: 'sticky; top: 0px;',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '40px',
        justifyContent: 'flex-start',
    },
    accountButton: {
        marginLeft: 'auto',
        marginRight: '15px',
        cursor: 'pointer',
    },
    signInButtonContainer: {
        position: 'sticky; top: 0px;',
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

export default function NavBar(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [user, setUser] = useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box>
            <Box bgcolor="white" borderBottom={1} borderColor="primary.main">
                {user &&
                <div className={classes.root}>
                    <MenuDrawer />
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
                        <MenuItem onClick={handleClose}>Sub Item 1</MenuItem>
                        <MenuItem onClick={handleClose}>Sub Item 2</MenuItem>
                        <MenuItem onClick={handleClose}>Sub Item 3</MenuItem>
                    </Menu>
                    <Button className={classes.links} color="primary">
                        Explore
                    </Button>
                    <Button className={classes.links} color="primary">
                        Item 3
                    </Button>
                    <Box className={classes.accountButton}>
                        <ProfileDrawer />
                    </Box>
                </div>
                }
                {!user &&
                    <Box className={classes.signInButtonContainer}>
                        <Button className={classes.signInButton} color="primary">Sign In</Button>
                    </Box>
                }
            </Box>
            <Button onClick={() => setUser(!user)}>Toggle login test</Button>
        </Box>
    );
}
