import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
}));

const TripItem = ({ title, description, location, startTime, endTime }) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <CardHeader title={title} subheader={startTime + '-' + endTime} />
      <CardContent>
        <Typography variant='h5'>{description}</Typography>
        <Link href='#' onClick={(e) => e.preventDefault()}>
          {location}
        </Link>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default TripItem;
