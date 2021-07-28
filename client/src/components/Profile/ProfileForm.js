import React, {useEffect, useState} from 'react';
import {Button, makeStyles, TextField, FormControl, InputLabel, OutlinedInput, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/slices/authSlice';
import {storeImages} from '../../services/storage';
import axios from "axios";

const useStyles = makeStyles({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        backgroundColor: 'white',
        marginTop: "20px",
    },
    field: {
        margin: '10px',
        marginTop: '20px',
        fullWidth: 'true',
    },
    button: {
        marginTop: '30px',
        marginLeft: '10px',
        color: 'white',
    },


});


export default function ProfileForm(props) {
    const classes = useStyles();

    const dispatch = useDispatch();

    const [userFirstName, setUserFirstName] = useState(props.userInfo.first_name);
    const [userLastName, setUserLastName] = useState(props.userInfo.last_name);
    const [userEmail, setUserEmail] = useState(props.userInfo.email);
    const [userAbout, setUserAbout] = useState(props.userInfo.about);
    const [userPhone, setUserPhone] = useState(props.userInfo.phone);
    const [userAddress, setUserAddress] = useState(props.userInfo.street);
    const [userCity, setUserCity] = useState(props.userInfo.city);
    const [userState, setUserState] = useState(props.userInfo.state);
    const [userZip, setUserZip] = useState(props.userInfo.zip);
    const [userCountry, setUserCountry] = useState(props.userInfo.country);

    const handleFirstNameChange = (event) => {
        props.setChanged(true);
        setUserFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        props.setChanged(true);
        setUserLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        props.setChanged(true);
        setUserEmail(event.target.value);
    };

    const handleAboutChange = (event) => {
        props.setChanged(true);
        setUserAbout(event.target.value);
    };

    const handlePhoneChange = (event) => {
        props.setChanged(true);
        setUserPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        props.setChanged(true);
        setUserAddress(event.target.value);
    };

    const handleCityChange = (event) => {
        props.setChanged(true);
        setUserCity(event.target.value);
    };

    const handleStateChange = (event) => {
        props.setChanged(true);
        setUserState(event.target.value);
    };

    const handleZipChange = (event) => {
        props.setChanged(true);
        setUserZip(event.target.value);
    };

    const handleCountryChange = (event) => {
        props.setChanged(true);
        setUserCountry(event.target.value);
    };

    const handleSave = async () => {
        props.setChanged(false);
        let imageURL;
        if(props.imageFiles) {
            let images = await storeImages(props.imageFiles);
            imageURL = images[0];
        }

        let user = {
            first_name: userFirstName,
            last_name: userLastName,
            email: userEmail,
            about: userAbout,
            phone: userPhone,
            street: userAddress,
            city: userCity,
            state: userState,
            zip: userZip,
            country: userCountry,
            photo_id: imageURL,
            _id: props.userId,
        };
        // axios.put(`http://localhost:3001/user/profile/${props.userId}`, user)
        //     .then((res) => {props.onChangeUserInfo(res.data)});
        dispatch(updateUser(user));
    };

    return (
            <form className={classes.formContainer} noValidate autoComplete="off">
                <Grid container>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-first-name">First Name</InputLabel>
                            <OutlinedInput id="profile-first-name" value={userFirstName} onChange={handleFirstNameChange} label="First Name" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-last-name">Last Name</InputLabel>
                            <OutlinedInput id="profile-last-name" value={userLastName} onChange={handleLastNameChange} label="Last Name" />
                        </FormControl>
                    </Grid>
                </Grid>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel htmlFor="profile-email">Email</InputLabel>
                    <OutlinedInput id="profile-email" value={userEmail} onChange={handleEmailChange} label="Email" />
                </FormControl>
                <TextField className={classes.field} variant="outlined" id="user-about" label="About You" multiline rows={5} value={userAbout} onChange={handleAboutChange} />
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel htmlFor="profile-phone-number">Phone Number</InputLabel>
                    <OutlinedInput id="profile-phone-number" value={userPhone} onChange={handlePhoneChange} label="Phone Number" />
                </FormControl>
                <FormControl className={classes.field} variant="outlined">
                    <InputLabel htmlFor="profile-street-address">Street Address</InputLabel>
                    <OutlinedInput id="profile-street-address" value={userAddress} onChange={handleAddressChange} label="Street Address" />
                </FormControl>
                <Grid container>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-city">City</InputLabel>
                            <OutlinedInput id="profile-city" value={userCity} onChange={handleCityChange} label="City" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-state">State / Province</InputLabel>
                            <OutlinedInput id="profile-state" value={userState} onChange={handleStateChange} label="State / Province" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-zip">Zip Code / Postal Code</InputLabel>
                            <OutlinedInput id="profile-zip" value={userZip} onChange={handleZipChange} label="Zip Code / Postal Code" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControl className={classes.field} variant="outlined">
                            <InputLabel htmlFor="profile-country">Country</InputLabel>
                            <OutlinedInput id="profile-country" value={userCountry} onChange={handleCountryChange} label="Country" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Button className={classes.button} variant="contained" color="primary" disabled={!props.changed} onClick={handleSave} style={{maxWidth: '100px'}}>Save</Button>
            </form>
    );
}