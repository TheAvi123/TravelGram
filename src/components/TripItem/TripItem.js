import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

const TripItem = ({ title, description, location, startTime, endTime }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={startTime + '-' + endTime} />
      <CardContent>
        <Typography variant='h5'>{description}</Typography>
        <Link href='#' onClick={(e) => e.preventDefault()}>
          {location}
        </Link>
        {/* TODO: onclick --> display on gmaps */}
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TripItem;
