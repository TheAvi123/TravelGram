import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions } from '@material-ui/core';
import AuthForm from '../components/AuthForm';
import { register } from '../store/slices/authSlice';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20% auto',
    flexDirection: 'column'
  }
});

function Register() {
  // TODO: these fields should come from a database
  const [ fields, updateFields ] = useState({
    'Username': '',
    'First Name': '',
    'Last Name': '',
    'Email': '',
    'Password': ''
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <AuthForm submitButton='Register' fields={fields} onChange={event => updateFields({ ...fields, ...event })} onSubmit={() => dispatch(register(fields))} />
      <CardActions>
        <div style={{ textAlign: 'center' }}>Have an account already? <Link to="/login"><Button>Login</Button></Link></div>
      </CardActions>
    </Card>
  );
}

export default Register;
