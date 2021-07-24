// Package imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper } from '@material-ui/core';
import SplitPane from 'react-split-pane';
import { makeStyles } from '@material-ui/core/styles';

// Component Imports
import Map from '../../components/TripMap/Map';
import TripSchedule from '../../components/Trip/TripSchedule';
import CreateFormButton from '../../components/CreateForm/CreateFormButton';
import DraggableSchedule from './DraggableSchedule';
import ActivityPopup from '../../components/Trip/ActivityPopup';
import TripImageListButton from '../../components/TripImageList/TripImageListButton';
import EditableContentButton from '../../components/EditableContent/EditableContentButton';

// Styling Imports
import './Resizer.css';

const useStyles = makeStyles({
  tripInfoContainer: {
    padding: '15px',
    height: '100%',
    width: '100%',
  },
  leftPanel: {
    backgroundColor: '#292929',
    color: 'white',
    height: '100%',
    width: '100%',
    overflow: 'scroll',
  },
  rightPanel: {
    height: '100%',
    width: '100%',
  },
});

const ViewTripPage = (props) => {
  // Component Hooks
  const [center, setCenter] = useState({
    lat: 49.28273,
    lng: -123.120735,
  }); // TODO: fetch user's location

  const [markers, setMarkers] = useState([]);

  const [showActivityPopup, setShowActivityPopup] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const trip = props.location.state;
  const [activities, setActivities] = useState([]);
  const [showAboutButton, setShowAboutButton] = useState(true);
  const [showActivityFormButton, setShowActivityFormButton] = useState(true);
  const [showImagesButton, setShowImagesButton] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const fetchActivities = async () => {
      const tripId = trip.id;
      try {
        const res = await axios.get(
          `http://localhost:3001/trip/${tripId}/activity`
        );
        console.log('got data from backend: ');
        const activites = res.data;
        console.log(activites);
        setActivities(activites);
      } catch (err) {
        console.log('error: ');
        console.log(err);
      }
    };
    fetchActivities();
  }, [trip.id]);

  // Component Functions
  const togglePopup = (theActivity) => {
    if (showActivityPopup) {
      setSelectedActivity(null);
    } else {
      setSelectedActivity(theActivity);
    }
    setShowActivityPopup(!showActivityPopup);
  };

  const handleSubmit = (data) => {
    setActivities((activities) => [data, ...activities]);
    setMarkers((markerCoordinates) => [...markerCoordinates, data.coordinates]);
    setCenter(data.coordinates);
  };

  const handleFileRemoved = (fileToRemove) => {
    // setSelectedFiles((files) => files.filter((file) => file !== fileToRemove));
    console.log(fileToRemove);
  };

  const handleAboutButtonClick = (shown) => {
    setShowActivityFormButton(!shown);
    setShowImagesButton(!shown);
    if (!shown) {
      setShowAboutButton(!shown);
    }
  };

  const handleActivityFormButtonClick = (shown) => {
    setShowAboutButton(!shown);
    setShowImagesButton(!shown);
    if (!shown) {
      setShowActivityFormButton(!shown);
    }
  };

  const handleImageListButtonClick = (shown) => {
    setShowAboutButton(!shown);
    setShowActivityFormButton(!shown);
    if (!shown) {
      setShowImagesButton(!shown);
    }
  };

  console.log('view trip');
  console.log(trip.images);

  return (
    <Box>
      <SplitPane
        split='vertical'
        minSize={300}
        maxSize={-300}
        defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
        onChange={(size) => localStorage.setItem('splitPos', size)}>
        <Box className={classes.leftPanel}>
          <Box display='flex' justifyContent='space-evenly'>
            {showAboutButton && (
              <EditableContentButton
                buttonName={'About this trip'}
                content={trip.description}
                readOnly={true}
                onClick={handleAboutButtonClick}
              />
            )}

            {showActivityFormButton && (
              <CreateFormButton
                formType='tripitem'
                onSuccess={handleSubmit}
                onError={null}
                onClose={null}
                tripId={trip.id}
                onClick={handleActivityFormButtonClick}
              />
            )}

            {showImagesButton && (
              <TripImageListButton
                buttonName={'View Images'}
                images={trip.images}
                onRemove={handleFileRemoved}
                onClick={handleImageListButtonClick}
              />
            )}
          </Box>

          <DraggableSchedule
            cards={activities}
            onDragDrop={setActivities}
            title={trip.title}
          />
        </Box>
        <Box className={classes.rightPanel}>
          <Map coordinates={center} markers={markers} />
        </Box>
      </SplitPane>
      {showActivityPopup && (
        <ActivityPopup card={selectedActivity} closePopup={togglePopup} />
      )}
    </Box>
  );
};

export default ViewTripPage;
