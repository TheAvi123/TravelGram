// Package imports
import React, { useState } from 'react';
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
        padding: '15px'
    },
    leftPanel: {
        backgroundColor: '#292929',
        color: 'white',
        height: '100%',
        width: '100%'
    },
    rightPanel: {
        height: '100%',
        width: '100%'
    }
});

const ViewTripPage = () => {

    // Component Hooks
    const [center, setCenter] = useState({
        lat: 49.282730,
        lng: -123.120735,
    }); // TODO: fetch user's location

    const [markers, setMarkers] = useState([]);

    const [showPopup, setShowPopup] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [cardList, setCardList] = useState(initialTimeline.initialCardList);

    const classes = useStyles();

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
        console.log(data);
        const { title, description, startTime, coordinates } = data;
        setMarkers((markerCoordinates) => [...markerCoordinates, coordinates]);
        setCardList((cards) => [{ title, description, startTime }, ...cards]);
        setCenter(coordinates);
      };

    return (
        <Box>
            <SplitPane split="vertical" 
                       minSize={300}    maxSize={-300}
                       defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
                       onChange={(size) => localStorage.setItem('splitPos', size)}>    
                <Box className={classes.leftPanel}>
                    <Box className={classes.scheduleContainer}>
                        {/* <TripSchedule openPopup={togglePopup}
                                      handleSubmit={handleSubmit}/> */}
                        <CreateFormButton className={classes.formButton}
                              formType='tripitem'
                              onSuccess={handleSubmit}
                              onError={null}
                              onClose={null}/>
                        <DraggableSchedule cards={cardList} onDragDrop={setCardList} />
                    </Box>
                </Box>
                <Box className={classes.rightPanel}>
                    <Map coordinates={center} markers={markers} />
                </Box>
            </SplitPane>
            {showPopup && <ActivityPopup card={selectedActivity} closePopup={togglePopup}/>}
        </Box>
    );
};

export default ViewTripPage;
