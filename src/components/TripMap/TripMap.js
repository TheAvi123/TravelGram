import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import MapContainer from './Map';

// Geocode.setApiKey('AIzaSyAxujBb1nZWVisKB3svhnKuFB4r92joWaQ');
// Geocode.enableDebug();

const TripMap = ({ center }) => {
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({
    lat: 47.444,
    lng: -122.176,
  });

  const handleSelect = async (selectedAddress) => {
    const results = await geocodeByAddress(selectedAddress);
    const latLng = await getLatLng(results[0]);
    setAddress(selectedAddress);
    setCoordinates(latLng);
  };

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <p>Lat: {coordinates.lat}</p>
              <p>Lng: {coordinates.lng}</p>
              <input
                {...getInputProps({ placeholder: 'Type address' })}></input>

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
            </div>
          );
        }}
      </PlacesAutocomplete>
      <MapContainer coordinates={coordinates} />
    </div>
  );
};

export default TripMap;
