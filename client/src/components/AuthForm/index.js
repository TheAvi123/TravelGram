import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, FormGroup, FormControl, FormControlLabel, Input, InputLabel, Checkbox } from '@material-ui/core';

export default function AuthForm({submitButton, fields, onChange, onSubmit}) {
  const [showPassword, toggleShowPassword] = useState(false);
  return (
    <FormGroup onSubmit={e => e.preventDefault()}>
      {Object.keys(fields).map(key => {
        const isPassword = key.toLowerCase().includes('password');
        return (
          <FormControl key={key}>
            <InputLabel htmlFor={key}>{key}</InputLabel>
            <Input id={key} name={key} type={isPassword && !showPassword ? 'password' : 'text'} onChange={e => onChange({[key]: e.target.value})} value={fields[key]}></Input>
          </FormControl>
        )
      })}
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox
              checked={showPassword}
              onChange={() => toggleShowPassword(!showPassword)}
            />
          }
          label='Show password'
        />
      </FormControl>
      <Button onClick={() => onSubmit()}>{submitButton}</Button>
    </FormGroup>
  );
}

AuthForm.propTypes = {
  submitButton: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
