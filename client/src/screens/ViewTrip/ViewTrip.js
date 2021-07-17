import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Typography } from '@material-ui/core';

import SplitPane from 'react-split-pane';

import Map from '../../components/TripMap/Map';
import TripSchedule from '../../components/Trip/TripSchedule';
import ActivityPopup from '../../components/Trip/ActivityPopup';

import './Resizer.css';

const useStyles = makeStyles({
    tripCard: {
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        border: 0,
        borderRadius: 15,
        boxShadow: '0 3px 5px 2px rgba(13, 59, 95, .3)',
        color: 'white',
        width: '300px',
        margin: '10px',
    },
    cardListContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        padding: '10px',
        flex: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formButton: {
        position: 'fixed'
    },
    mapContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        flex: 6,
    },
    leftPanel: {
        backgroundColor: '#888888',
        margin: '0px',
        height: '100%',
        width: '100%'
    },
    rightPanel: {
    }
});

const CardList = ({ cards }) => {
    const classes = useStyles();
    return (
        <Box className={classes.cardListContainer}>
            {cards.map((card, i) => {
                return (
                    <Card className={classes.tripCard}>
                        <CardContent>
                            <Typography className='cardName'>{card.title}</Typography>
                            <Typography className='cardDescription'>
                                {card.description}
                            </Typography>
                        </CardContent>
                    </Card>
                );
            })}
        </Box>
    );
};

const ViewTripPage = () => {

    // Component Hooks
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const [markers, setMarkers] = useState([]);
    const [center, setCenter] = useState({
        lat: 49.3,
        lng: -123.2,
    }); // TODO: fetch user's location

    const classes = useStyles();

    // Component Functions
    const togglePopup = (openedCard) => {
        if (showPopup) {
            setSelectedCard(null);
        } else {
            setSelectedCard(openedCard);
        }
        setShowPopup(!showPopup);
    };

    const handleSubmit = (data) => {
        console.log(data);
        const { title, description, startTime, coordinates } = data;
        setMarkers((markerCoordinates) => [...markerCoordinates, coordinates]);
        setCenter(coordinates);
    };

    return (
        <Box className={classes.wrapper}>
            <SplitPane split="vertical"
                       minSize={300}
                       maxSize={-300}
                       defaultSize={parseInt(localStorage.getItem('splitPos'), 10)}
                       onChange={(size) => localStorage.setItem('splitPos', size)}>    
                       {/*Currently using localStorage - change to DB */}
                <Box className={classes.leftPanel}>
                    <Box className={classes.cardListContainer}>
                        {/* <DraggableSchedule cards={cardList} onDragDrop={setCardList} /> */}
                        <TripSchedule openPopup={togglePopup}
                                      handleSubmit={handleSubmit}/>
                    </Box>
                </Box>
                <Box className={classes.rightPanel}>
                    <Map coordinates={center} markers={markers} />
                </Box>
            </SplitPane>
            {showPopup && <ActivityPopup card={selectedCard} closePopup={togglePopup}/>}
        </Box>
    );
};

export default ViewTripPage;
