import React, { useState } from 'react';
import {Button, makeStyles, TextField, FormControl, InputLabel, OutlinedInput, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../store/slices/authSlice';
import { storeImages } from '../../services/storage';
import theme from '../../theme';

const useStyles = makeStyles({
    formRoot: {
        width: '100%',
        marginTop: "5%",
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    nameContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    locationContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    field: {
        flexGrow: 1,
        marginBottom: "2%"
    },
    rightField: {
        flexGrow: 1,
        marginLeft: "2%",
        marginBottom: "2%"
    },
    saveButton: {
        padding: '1% 0%',
        fontSize: '1em',
        color: theme.palette.black,
        background: 'linear-gradient(160deg, ' + theme.palette.primary.main + ', ' + theme.palette.secondary.main + ')',
        '&:hover': {
          color: theme.palette.white,
          background: 'linear-gradient(160deg, ' + theme.palette.primary.dark + ', ' + theme.palette.secondary.dark + ')'
        }
    },
    disabledButton: {
        color: 'grey !important',
        background: 'linear-gradient(160deg, ' + theme.palette.primary.desat + ', ' + theme.palette.secondary.desat + ')'
    }
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

        dispatch(updateUser(user));
    };

    return (
        <form className={classes.formRoot} noValidate autoComplete="off">
            <div className={classes.mainContainer}> 
                <div className={classes.nameContainer}>
                    <FormControl className={classes.field} variant="outlined">
                        <InputLabel htmlFor="profile-first-name">First Name</InputLabel>
                        <OutlinedInput id="profile-first-name" value={userFirstName} onChange={handleFirstNameChange} label="First Name" />
                    </FormControl>
                    <FormControl className={classes.rightField} variant="outlined">
                        <InputLabel htmlFor="profile-last-name">Last Name</InputLabel>
                        <OutlinedInput id="profile-last-name" value={userLastName} onChange={handleLastNameChange} label="Last Name" />
                    </FormControl>
                </div>

                <FormControl className={classes.field} variant="outlined" fullWidth>
                    <InputLabel htmlFor="profile-email">Email</InputLabel>
                    <OutlinedInput id="profile-email" value={userEmail} onChange={handleEmailChange} label="Email" />
                </FormControl>

                <FormControl className={classes.field} variant="outlined" fullWidth>
                    <InputLabel htmlFor="profile-phone-number">Phone Number</InputLabel>
                    <OutlinedInput id="profile-phone-number" value={userPhone} onChange={handlePhoneChange} label="Phone Number" />
                </FormControl>

                <TextField className={classes.field} variant="outlined"
                           id="user-about" label="About You" fullWidth
                           multiline rows={3} value={userAbout} 
                           onChange={handleAboutChange} 
                />

                <div className={classes.locationContainer}>
                    <FormControl className={classes.field} variant="outlined" style={{flexGrow: 8}}>
                        <InputLabel htmlFor="profile-street-address">Street Address</InputLabel>
                        <OutlinedInput id="profile-street-address" value={userAddress} onChange={handleAddressChange} label="Street Address" />
                    </FormControl>
                    <FormControl className={classes.rightField} variant="outlined" style={{flexGrow: 0}}>
                        <InputLabel htmlFor="profile-zip">Postal Code</InputLabel>
                        <OutlinedInput id="profile-zip" value={userZip} onChange={handleZipChange} label="Postal Code" />
                    </FormControl>
                </div>

                <div className={classes.locationContainer}>
                    <FormControl className={classes.field} variant="outlined">
                        <InputLabel htmlFor="profile-city">City</InputLabel>
                        <OutlinedInput id="profile-city" value={userCity} onChange={handleCityChange} label="City" />
                    </FormControl>
                    <FormControl className={classes.rightField} variant="outlined">
                        <InputLabel htmlFor="profile-state">State / Province</InputLabel>
                        <OutlinedInput id="profile-state" value={userState} onChange={handleStateChange} label="State / Province" />
                    </FormControl>
                    <FormControl className={classes.rightField} variant="outlined">
                        <InputLabel htmlFor="profile-country">Country</InputLabel>
                        <OutlinedInput id="profile-country" value={userCountry} onChange={handleCountryChange} label="Country" />
                    </FormControl>
                </div>

                <Button classes={{root: classes.saveButton, disabled: classes.disabledButton}} variant="contained"
                        disabled={!props.changed} onClick={handleSave}>
                    SAVE CHANGES
                </Button>
            </div>
        </form>
    );
}