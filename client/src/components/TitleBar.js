import {Box, Menu, MenuItem, Button, makeStyles, useTheme} from '@material-ui/core';
import TravelGram from '../images/TravelGram.png';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        height: '150px',
        cursor: 'pointer',
        backgroundColor: '#75BEE7',
        alignItems: 'flex-end',
    },
    text: {
        position: 'absolute',
        marginLeft: '50px',
        fontSize: '70px',
        color: 'white',
    },
    logo: {
        position: 'relative',
        marginLeft: '40px',
        marginBottom: '15px',
        maxHeight: '90px',
    }
});

export default function TitleBar(props) {

    const classes = useStyles();

    return (
        <Box className={classes.root} bgcolor="secondary.main">
            <img className={classes.logo} src={TravelGram} />
        </Box>

    );


}