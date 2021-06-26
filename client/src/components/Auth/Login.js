import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { Button, CardActions } from '@material-ui/core';

export default function Login({ switchToRegister, onSubmit }) {
  // TODO: these fields should come from a database
  const [fields, updateFields] = useState({
    'Username': '',
    'Password': ''
  })
  return <div>
    <AuthForm submitButton='Login' fields={fields} onChange={event => updateFields({...fields, ...event})} onSubmit={() => onSubmit(fields)} />
    <CardActions>
      <div style={{textAlign: 'center'}}>Don't have an account yet? <Button onClick={() => switchToRegister()}>Register</Button></div>
    </CardActions>
  </div>;
}
