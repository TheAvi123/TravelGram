import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateForm from '../components/CreateForm/CreateForm';
import Map from '../components/TripMap/Map';

const dummyCoordinates = [
  { lat: 47.49855629475769, lng: -122.14184416996333 },
  { lat: 47.359423, lng: -122.021071 },
  { lat: 47.2052192687988, lng: -121.988426208496 },
  { lat: 47.6307081, lng: -122.1434325 },
  { lat: 47.3084488, lng: -122.2140121 },
  { lat: 47.5524695, lng: -122.0425407 },
];

const initialCardList = [
  { title: 'First title', description: 'description' },
  { title: 'Second title', description: 'description' },
  { title: 'Third title', description: 'description' },
  { title: 'Fourth title', description: 'description' },
  { title: 'Fifth title', description: 'description' },
];

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
    margin: '10px',
    flex: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '40px 20px',
  },
  mapContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: 6,
  },
});

const CreateFormButton = ({ onClick }) => {
  return (
    <Button variant='contained' onClick={onClick}>
      Create Trip Item
    </Button>
  );
};

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

const EditTripPage = () => {
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({
    lat: 49.3,
    lng: -123.2,
  }); // TODO: fetch user's location
  const [showFormPopup, setFormPopup] = useState(false);
  const [cardList, setCardList] = useState(initialCardList);

  const classes = useStyles();

  const toggleFormPopup = () => {
    setFormPopup((popup) => !popup);
  };

  const handleSubmit = (data) => {
    console.log(data);
    const { title, description, coordinates } = data;
    setMarkers((markerCoordinates) => [...markerCoordinates, coordinates]);
    setCardList((cards) => [{ title, description }, ...cards]);
    setCenter(coordinates);
    toggleFormPopup();
  };

  return (
    <Box className={classes.wrapper}>
      <CardList cards={cardList} />
      {showFormPopup && (
        <CreateForm
          formType='item'
          onSubmit={handleSubmit}
          onClose={toggleFormPopup}
        />
      )}
      <Box className={classes.mapContainer}>
        <CreateFormButton onClick={toggleFormPopup} />
        <Map
          coordinates={center}
          style={{ margin: '30px' }}
          markers={markers}
        />
      </Box>
    </Box>
  );
};

export default EditTripPage;
