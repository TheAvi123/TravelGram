import React, {useState, useEffect} from 'react';
import {Box,  makeStyles, IconButton, Divider} from '@material-ui/core';
import NavBar from '../components/NavBar/NavBar';
import TitleBar from '../components/TitleBar';
import ProfilePic from '../components/Profile/ProfilePic';
import ProfileForm from '../components/Profile/ProfileForm';
import EditIcon from "@material-ui/icons/Edit";
import axios from "axios";

const useStyles = makeStyles({
    screen: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        alignContent: 'center',
        alignItems: 'center',
        justify: 'center',

    },
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '1050px',
        width: '60%',
        border: '1px solid',
        borderColor: '#3DB8DA',
        borderRadius: '20px',
        marginTop: '30px',
        marginBottom: '50px',
        alignContent: 'center',
        alignItems: 'center',
    },
    title: {
        position: 'relative',
        marginTop: '25px',
        marginLeft: '5%',
        marginRight: 'auto',
    },
    editButton: {
        position: 'absolute',
        bottom: '0',
        right: '0',
        zIndex: '1',
        backgroundColor: 'white',
    },
    picContainer: {
        position: 'relative',
        display: 'flex',
        width: '160px',
    },
    topContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: "100%",
        justify: "center",
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: "20px 20px 0px 0px",
        height: 'auto',
        paddingBottom: '20px',
        marginTop: '-1px',
    },
});

export default function EditProfile(props) {
    const classes = useStyles();

    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState({
        user_name: "",
        email: "",
        password: "",
        first_name: "abc",
        last_name: "",
        about: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        photo_id: "",
        trips: [],
    });

    // Temp!!!!!!!!!!!!!!!!!!!!!!!!!!
    const id = "60fcde5f6f567e4e1d872bca";

    useEffect(() => {
        axios.get(`http://localhost:3001/users/profile/${id}`)
            .then(res => {
                setUserInfo(res.data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (<span>Loading...</span>)
    } else {
        return (
            <div>
                <Box className={classes.screen}>
                    <Box className={classes.container}>
                        <Box className={classes.topContainer} bgcolor="primary.main" align="center">
                            <Box className={classes.title}>
                                <h1 style={{color: 'white'}}>Edit Profile</h1>
                            </Box>
                            <Box className={classes.picContainer}>
                                <ProfilePic size="large" userInfo={userInfo} userId={id}/>
                                <IconButton className={classes.editButton} component="label">
                                    <input type="file" hidden/>
                                    <EditIcon/>
                                </IconButton>
                            </Box>
                            <h1 style={{color: 'white', marginTop: '15px'}}>{userInfo.user_name}</h1>
                        </Box>
                        <ProfileForm userInfo={userInfo} onChangeUserInfo={setUserInfo} userId={id}/>
                    </Box>
                </Box>
                <ProfilePic size="medium" clickable="true"/>
            </div>
        );
    }
}