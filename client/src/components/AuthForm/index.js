import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, FormGroup, FormControl, Input, InputLabel } from '@material-ui/core';
import './index.css';

export default function AuthForm({submitButton, fields, onChange, onSubmit}) {
  const [showPassword, toggleShowPassword] = useState(false);
  return (
    <FormGroup onSubmit={e => e.preventDefault()} className="auth--form-group">
      {Object.keys(fields).map(key => {
        const isPassword = key.toLowerCase().includes('password');
        return (
          <FormControl key={key} className="auth--form-control">
            <InputLabel htmlFor={key} className="auth--label">{key}</InputLabel>
            <Input
              id={key}
              name={key}
              type={isPassword && !showPassword ? 'password' : 'text'}
              onChange={e => onChange({ [ key ]: e.target.value })} value={fields[ key ]}
              className="auth--input"
            >
            </Input>
          </FormControl>
        )
      })}
      <div className={`auth--eye-wrapper ${showPassword ? 'auth--unhide' : ''}`}>
        <FontAwesomeIcon icon={faEye} onClick={() => toggleShowPassword(!showPassword)} />
      </div>
      <Button onClick={() => onSubmit()} className="auth--button">{submitButton}</Button>
    </FormGroup>
  );
}

AuthForm.propTypes = {
  submitButton: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
