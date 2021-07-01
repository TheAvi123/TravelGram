import {Box, Menu, MenuItem, Button, makeStyles, useTheme} from '@material-ui/core';
import TravelGram from '../images/TravelGram.png';

const useStyles = makeStyles({
    root: {
        position: 'relative',
        width: '100%',
        display: 'flex',
        height: '150px',
        cursor: 'pointer',
        backgroundColor: '#3DB8DA',
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
        marginLeft: '30px',
        marginBottom: 'auto',
        marginTop: '25px',
        maxHeight: '60px',
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