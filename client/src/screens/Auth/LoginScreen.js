import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions } from '@material-ui/core';
import AuthForm from '../../components/AuthForm';
import { login } from '../../store/slices/authSlice';
import { USERNAME, PASSWORD } from './fieldNames';
import './index.css';

function Login() {
  const [fields, updateFields] = useState({
    [USERNAME]: '',
    [PASSWORD]: '',
  });
  const dispatch = useDispatch();

  return (
    <Card className="auth--root login">
      <AuthForm
        submitButton="Login"
        fields={fields}
        onChange={(event) => updateFields({ ...fields, ...event })}
        onSubmit={() => dispatch(login(fields)).then(() => window.location = '/').catch(err => alert(err))}
      />
      <CardActions>
        <div className="auth--switch">
          Don't have an account yet?{' '}
          <Link to="/register">
            <Button>Register</Button>
          </Link>
        </div>
      </CardActions>
    </Card>
  );
}

export default Login;
