import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React from 'react';

const mapStyles = {
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px'
};

export class MapContainer extends React.Component {
    render() {
        return (
            <div style={this.props.style}>
                <Map
                    google={this.props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={this.props.coordinates}
                    center={this.props.coordinates}>
                    {this.props.markers.map((marker, index) => {
                        return (
                            <Marker
                                key={index}
                                id={index}
                                position={{
                                    lat: marker.lat,
                                    lng: marker.lng,
                                }}
                            />
                        );
                    })}
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
})(MapContainer);
