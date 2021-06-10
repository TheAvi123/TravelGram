import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import { Button, Card, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20% auto'
  }
});

export default function AuthScreen() {
  const [state, setState] = useState('home');
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      {
        state === 'home'
        ? <Home onClick={e => setState(e)} />
        : state === 'login'
          ? <Login switchToRegister={() => setState('register')} onSubmit={e => mockLogin(e)} />
          : <Register switchToLogin={() => setState('login')} onSubmit={e => mockRegister(e)} />
      }
    </Card>
  );
}

function Home({onClick}) {
  return (
    <CardActions>
      <Button onClick={() => onClick('login')}>Login</Button>
      <Button onClick={() => onClick('register')}>Register</Button>
    </CardActions>
  );
}

// TODO: this function should call an actual api
function mockRegister(data) {
  if (data['Password'] !== data['Confirm Password']) {
    alert('Passwords have to match. Please try again.');
  } else {
    console.log('=================');
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}: ${value}`);
    }
    console.log('=================');
  }
}

// TODO: this function should call an actual api
function mockLogin(data) {
  console.log('=================');
  for (const [key, value] of Object.entries(data)) {
    console.log(`${key}: ${value}`);
  }
  console.log('=================');
}
