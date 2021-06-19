import React, {useState} from 'react';
import {Box, Menu, MenuItem, Button, makeStyles} from '@material-ui/core';
import MenuDrawer from './MenuDrawer';
import ProfileDrawer from './ProfileDrawer';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '40px',
        cursor: 'pointer'
    }
});

function NavBar(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <Box className={classes.root} bgcolor="primary.main">
            <MenuDrawer />
            <Button onClick={handleClick}>
                Working Button
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
            <Button>
                Item 2
            </Button>
            <Button>
                Item 3
            </Button>
            <ProfileDrawer />
        </Box>
    );
}


export default NavBar;