import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from '@material-ui/core';
import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const LocationSearchBar = ({ address, onLocationChange, onLocationSelect }) => {
  const handleSelect = async (selectedAddress) => {
    const results = await geocodeByAddress(selectedAddress);
    const latLng = await getLatLng(results[0]);
    onLocationSelect(selectedAddress, latLng);
  };

  return (
    <Box>
      <PlacesAutocomplete
        value={address}
        onChange={onLocationChange}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <FormControl variant='outlined'>
              <InputLabel htmlFor='search-bar'>Location</InputLabel>
              <OutlinedInput
                id='search-bar-input'
                startAdornment={
                  <InputAdornment position='start'>
                    <IconButton
                      aria-label='search-icon'
                      onClick={null}
                      onMouseDown={null}
                      edge='end'>
                      <LocationOnIcon />
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={60}
                {...getInputProps({
                  placeholder: 'Type address',
                })}></OutlinedInput>
              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                  };
                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </FormControl>
          );
        }}
      </PlacesAutocomplete>
    </Box>
  );
};

export default LocationSearchBar;
