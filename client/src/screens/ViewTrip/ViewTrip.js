// Package imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box } from '@material-ui/core';
import SplitPane from 'react-split-pane';
import { makeStyles } from '@material-ui/core/styles';

// Component Imports
import Map from '../../components/TripMap/Map';
import TripSchedule from '../../components/Trip/TripSchedule';
import CreateFormButton from '../../components/CreateForm/CreateFormButton';
import DraggableSchedule from './DraggableSchedule';
import ActivityPopup from '../../components/Trip/ActivityPopup';
import initialTimeline from './../../components/Trip/initialTimeline';

// Styling Imports
import './Resizer.css';

const useStyles = makeStyles({
  scheduleContainer: {
    padding: '15px',
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

  const [showPopup, setShowPopup] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const trip = props.location.state;
  const [activities, setActivities] = useState([]);

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
    if (showPopup) {
      setSelectedActivity(null);
    } else {
      setSelectedActivity(theActivity);
    }
    setShowPopup(!showPopup);
  };

  const handleSubmit = (data) => {
    setActivities((activities) => [data, ...activities]);
    setMarkers((markerCoordinates) => [...markerCoordinates, data.coordinates]);
    setCenter(data.coordinates);
  };

  return (
    <Box>
      <SplitPane
        split='vertical'
        minSize={300}
        maxSize={-300}
        defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
        onChange={(size) => localStorage.setItem('splitPos', size)}>
        <Box className={classes.leftPanel}>
          <Box className={classes.scheduleContainer}>
            {/* <TripSchedule openPopup={togglePopup}
                                      handleSubmit={handleSubmit}/> */}
            <CreateFormButton
              className={classes.formButton}
              formType='tripitem'
              onSuccess={handleSubmit}
              onError={null}
              onClose={null}
              tripId={trip.id}
            />
            <DraggableSchedule cards={activities} onDragDrop={setActivities} />
          </Box>
        </Box>
        <Box className={classes.rightPanel}>
          <Map coordinates={center} markers={markers} />
        </Box>
      </SplitPane>
      {showPopup && (
        <ActivityPopup card={selectedActivity} closePopup={togglePopup} />
      )}
    </Box>
  );
};

export default ViewTripPage;
