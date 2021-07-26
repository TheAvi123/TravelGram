import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardActions } from '@material-ui/core';
import AuthForm from '../../components/AuthForm';
import { register } from '../../store/slices/authSlice';
import { makeStyles } from '@material-ui/core/styles';
import { USERNAME, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME } from './fieldNames';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20% auto',
    flexDirection: 'column',
  },
});

function Register() {
  const [fields, updateFields] = useState({
    [USERNAME]: '',
    [FIRST_NAME]: '',
    [LAST_NAME]: '',
    [EMAIL]: '',
    [PASSWORD]: '',
  });
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <AuthForm
        submitButton="Register"
        fields={fields}
        onChange={(event) => updateFields({ ...fields, ...event })}
        onSubmit={() => dispatch(register(fields)).then(() => { return <Redirect to="/" /> }).catch(err => alert(err))}
      />
      <CardActions>
        <div style={{ textAlign: 'center' }}>
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
