import React, {useState} from 'react';
import {Box, Button, makeStyles, TextField, FormControl, InputLabel, Input, OutlinedInput, Grid} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

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
        marginTop: '40px',
        color: 'white',
    },


});


export default function ProfileForm(props) {
    const classes = useStyles();

    const [userFirstName, setUserFirstName] = useState("John");
    const [userLastName, setUserLastName] = useState("Doe");
    const [userEmail, setUserEmail] = useState("JohnDoe@hotmail.com");
    const [userAbout, setUserAbout] = useState("I am a mysterious person.");
    const [userPhone, setUserPhone] = useState("604-123-4567");
    const [userAddress, setUserAddress] = useState("1234 Easy St.");
    const [userCity, setUserCity] = useState("Vancouver");
    const [userState, setUserState] = useState("British Columbia");
    const [userZip, setUserZip] = useState("123456");
    const [userCountry, setUserCountry] = useState("Canada");


    const handleFirstNameChange = (event) => {
      setUserFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setUserLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handleAboutChange = (event) => {
        setUserAbout(event.target.value);
    };

    const handlePhoneChange = (event) => {
        setUserPhone(event.target.value);
    };

    const handleAddressChange = (event) => {
        setUserAddress(event.target.value);
    };

    const handleCityChange = (event) => {
        setUserCity(event.target.value);
    };

    const handleStateChange = (event) => {
        setUserState(event.target.value);
    };

    const handleZipChange = (event) => {
        setUserZip(event.target.value);
    };

    const handleCountryChange = (event) => {
        setUserCountry(event.target.value);
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
                <Button className={classes.button} variant="contained" color="primary" style={{maxWidth: '150px'}}>Save Changes</Button>
            </form>
    );
}