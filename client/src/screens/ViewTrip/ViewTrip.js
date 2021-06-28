import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Map from '../../components/TripMap/Map';
import DraggableSchedule from './DraggableSchedule';
import CreateFormButton from '../../components/CreateForm/CreateFormButton';

const initialCardList = [
  {
    title: 'First title',
    description: 'description',
    startTime: '2021-06-26T10:30',
  },
  {
    title: 'Second title',
    description: 'description',
    startTime: '2021-06-26T10:30',
  },
  {
    title: 'Third title',
    description: 'description',
    startTime: '2021-06-26T10:30',
  },
  {
    title: 'Fourth title',
    description: 'description',
    startTime: '2021-06-26T10:30',
  },
  {
    title: 'Fifth title',
    description: 'description',
    startTime: '2021-06-26T10:30',
  },
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
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({
    lat: 49.3,
    lng: -123.2,
  }); // TODO: fetch user's location
  const [cardList, setCardList] = useState(initialCardList);

  const classes = useStyles();

  const handleSubmit = (data) => {
    console.log(data);
    const { title, description, startTime, coordinates } = data;
    setMarkers((markerCoordinates) => [...markerCoordinates, coordinates]);
    setCardList((cards) => [{ title, description, startTime }, ...cards]);
    setCenter(coordinates);
  };

  return (
    <Box className={classes.wrapper}>
      <Box className={classes.cardListContainer}>
        <DraggableSchedule cards={cardList} onDragDrop={setCardList} />
      </Box>
      <Box className={classes.mapContainer}>
        <CreateFormButton
          formType='tripitem'
          onSuccess={handleSubmit}
          onError={null}
          onClose={null}
        />
        <Map
          coordinates={center}
          style={{ margin: '30px' }}
          markers={markers}
        />
      </Box>
    </Box>
  );
};

export default ViewTripPage;
