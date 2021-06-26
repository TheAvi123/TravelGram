import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { Button, CardActions } from '@material-ui/core';

export default function Register({ switchToLogin, onSubmit }) {
  // TODO: these fields should come from a database
  const [fields, updateFields] = useState({
    'Username': '',
    'Email': '',
    'Password': '',
    'Confirm Password': ''
  })
  return <div>
    <AuthForm submitButton='Register' fields={fields} onChange={event => updateFields({...fields, ...event})} onSubmit={() => onSubmit(fields)} />
    <CardActions>
      <div style={{textAlign: 'center'}}>Have an account already? <Button onClick={() => switchToLogin()}>Login</Button></div>
    </CardActions>
  </div>;
}
