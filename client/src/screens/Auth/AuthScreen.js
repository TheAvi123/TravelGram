import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import { Button, Card, CardActions } from '@material-ui/core';
import './index.css';

export default function AuthScreen() {
  const [state, setState] = useState('home');
  return (
    <Card className="auth--root">
      {
        state === 'home' ? <Home onClick={(e) => setState(e)} /> :
          (state === 'login' ? <Login /> : <Register />)
      }
    </Card>
  );
}

function Home({ onClick }) {
  return (
    <CardActions>
      <Button onClick={() => onClick('login')}>Login</Button>
      <Button onClick={() => onClick('register')}>Register</Button>
    </CardActions>
  );
}
