import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions } from '@material-ui/core';
import AuthForm from '../../components/AuthForm';
import { register } from '../../store/slices/authSlice';
import { USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME } from './fieldNames';
import './index.css';

function Register() {
  const [fields, updateFields] = useState({
    [USERNAME]: '',
    [FIRST_NAME]: '',
    [LAST_NAME]: '',
    [EMAIL]: '',
    [PASSWORD]: '',
  });
  const dispatch = useDispatch();

  return (
    <Card className="auth--root register">
      <AuthForm
        submitButton="Register"
        fields={fields}
        onChange={(event) => updateFields({ ...fields, ...event })}
        onSubmit={() => dispatch(register(fields)).then(() => window.location = '/').catch(err => alert(err))}
      />
      <CardActions>
        <div className="auth--switch">
          Have an account already?{' '}
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}

export default Register;
