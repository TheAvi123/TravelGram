// Package imports
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Box, Paper, Button } from '@material-ui/core';
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
import CreateTemplatePopup from './CreateTemplatePopup';
import { Alert } from '@material-ui/lab';

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
  popupOuter: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    overflow: 'scroll',
    margin: '20px auto',
  },
  popupInner: {
    width: '90%',
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    margin: '20px',
  },
  alertBox: {
    margin: '5px 20px',
  },
});

const ViewTripPage = (props) => {
  let history = useHistory();
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
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [showAboutButton, setShowAboutButton] = useState(true);
  const [showActivityFormButton, setShowActivityFormButton] = useState(true);
  const [showImagesButton, setShowImagesButton] = useState(true);
  const [showTemplatePopup, setShowTemplatePopup] = useState(false);
  const [activitiesError, setActivitiesError] = useState('');
  const [templateError, setTemplateError] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchActivities = async () => {
      setIsLoading(true);
      const tripId = trip.id;
      try {
        const res = await axios.get(
          `http://localhost:3001/trip/${tripId}/activity`
        );
        const activites = res.data;
        const markers = activites.map((activity) => activity.coordinates);
        setActivities(activites);
        setMarkers(markers);
        setIsLoading(false);
      } catch (err) {
        const errorMsg = err.response.data;
        setActivitiesError(errorMsg);
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

  const handleMarkerClick = (marker) => {
    const currentSelectedActivites = activities.filter(
      (activity) =>
        activity.coordinates.lat === marker.lat &&
        activity.coordinates.lng === marker.lng
    );
    const isAllSelected = currentSelectedActivites.every((activity) =>
      selectedActivities.includes(activity)
    );
    // if every activity that should be selected is selected
    if (isAllSelected) {
      // remove all from the selected array
      const newSelectedActivities = selectedActivities.filter(
        (activity) => !currentSelectedActivites.includes(activity)
      );
      setSelectedActivities(newSelectedActivities);
    } else {
      // otherwise, add the missing activities from the activites that should be selected to selected activities state
      const newSelectedActivities = [];
      currentSelectedActivites.forEach((activity) => {
        if (!selectedActivities.includes(activity)) {
          newSelectedActivities.push(activity);
        }
      });
      setSelectedActivities((selectedActivities) => [
        ...selectedActivities,
        ...newSelectedActivities,
      ]);
    }
  };

  const handleDeleteTrip = async () => {
    const tripId = trip.id;
    try {
      const res = await axios.delete(`http://localhost:3001/trip/${tripId}`);
      console.log('successfully deleted trip');
      history.push({ pathname: '/' });
    } catch (err) {
      const errorMsg = err.response.data;
      setDeleteError(errorMsg);
    }
  };

  const handleCreateTemplate = async (data) => {
    setShowTemplatePopup(false);
    const tripId = data.id;
    const activities = { activities: trip.activities };
    try {
      const res = await axios.patch(
        `http://localhost:3001/trip/${tripId}/activity`,
        activities
      );
      const trip = res.data;
      const tripTitle = res.data.title;
      history.push({ pathname: `/trip/${tripTitle}`, state: trip });
    } catch (err) {
      const errorMsg = err.response.data;
      setTemplateError(errorMsg);
    }
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
                // onError={null}
                // onClose={null}
                tripId={trip.id}
                onClick={handleActivityFormButtonClick}
              />
            )}

            {showImagesButton && (
              <TripImageListButton
                shownButtonName={'View Images'}
                hiddenButtonName={'Hide Images'}
                images={trip.images}
                onRemove={handleFileRemoved}
                onClick={handleImageListButtonClick}
              />
            )}
          </Box>

          <DraggableSchedule
            cards={activities}
            selectedCards={selectedActivities}
            onDragDrop={setActivities}
            title={trip.title}
          />

          {activitiesError ? (
            <Box className={classes.alertBox}>
              <Alert severity='error'>{activitiesError}</Alert>
            </Box>
          ) : activities.length < 1 && !isLoading ? (
            <Box className={classes.alertBox}>
              <Alert severity='warning'>{'There are no activities!'}</Alert>
            </Box>
          ) : null}

          {templateError && (
            <Box className={classes.alertBox}>
              <Alert severity='error'>{templateError}</Alert>
            </Box>
          )}
          {deleteError && (
            <Box className={classes.alertBox}>
              <Alert severity='error'>{deleteError}</Alert>
            </Box>
          )}
          <Box display='flex' justifyContent='space-evenly'>
            <Button
              variant='contained'
              onClick={() => setShowTemplatePopup(true)}
              style={{
                maxWidth: '200px',
                margin: '30px auto',
                backgroundColor: '#4290f5',
              }}>
              {'Use as Template'}
            </Button>

            <Button
              variant='contained'
              onClick={handleDeleteTrip}
              style={{
                maxWidth: '200px',
                margin: '30px auto',
                backgroundColor: '#fa345f',
              }}>
              {'Delete Trip'}
            </Button>
          </Box>
        </Box>

        <Box className={classes.rightPanel}>
          <Map
            coordinates={center}
            markers={markers}
            onMarkerClick={handleMarkerClick}
          />
        </Box>
      </SplitPane>
      {/* {showActivityPopup && (
        <ActivityPopup card={selectedActivity} closePopup={togglePopup} />
      )} */}
      {showTemplatePopup && (
        <Box className={classes.popupOuter}>
          <Box className={classes.popupInner}>
            <CreateTemplatePopup
              onSuccess={handleCreateTemplate}
              onError={() => setShowTemplatePopup(false)}
              onClose={() => setShowTemplatePopup(false)}
              // tripId={trip.id}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ViewTripPage;
