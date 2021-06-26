import {
  Home,
  QueryBuilder,
  Rowing,
  LocalDining,
  CardTravel,
} from '@material-ui/icons';

const TripItems = {
  accommodation: {
    id: 'Accommodation',
    icon: <Home />,
    color: '#757ce8',
  },
  reservation: {
    id: 'Reservation',
    icon: <QueryBuilder />,
    color: 'green',
  },
  activity: {
    id: 'Activity',
    icon: <Rowing />,
    color: 'yellow',
  },
  dining: {
    id: 'Dining',
    icon: <LocalDining />,
    color: 'orange',
  },
  other: {
    id: 'Other',
    icon: <CardTravel />,
    color: 'red',
  },
};

export default TripItems;
