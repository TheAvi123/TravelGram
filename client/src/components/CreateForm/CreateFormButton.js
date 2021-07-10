import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Expand from 'react-expand-animated';
import CreateForm from './CreateForm';

const useStyles = makeStyles((theme) => ({
  formMessage: {
    width: '100%',
    marginTop: '10px',
  },
}));

const CreateFormButton = ({ formType, onSuccess, onError, onClose }) => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const toggleShowForm = () => {
    setShowForm((showForm) => !showForm);
  };

  const handleSuccess = (data) => {
    setFormMessage(`Success: ${data.title} is created!`);
    setShowSuccess(true);
    const timer = setTimeout(() => {
      toggleShowForm();
      setShowSuccess(false);
      clearTimeout(timer);
    }, 3000);
    onSuccess(data);
  };

  const handleError = (data) => {
    setFormMessage(`Error: ${data.title} could not be created!`);
    setShowError(true);
    const timer = setTimeout(() => {
      toggleShowForm();
      setShowError(false);
      clearTimeout(timer);
    }, 3000);
  };

  const handleClose = () => {
    toggleShowForm();
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        variant='contained'
        onClick={toggleShowForm}
        style={{ maxWidth: '200px', margin: '30px auto' }}>
        {formType === 'trip'
          ? 'Create Trip'
          : formType === 'tripitem'
          ? 'Add Trip Item'
          : ''}
      </Button>
      {showSuccess && <Alert severity='success'>{formMessage}</Alert>}
      {showError && <Alert severity='error'>{formMessage}</Alert>}
      {showForm && (
        <Expand open={showForm} duration={200}>
          <CreateForm
            formType={formType}
            onSuccess={handleSuccess}
            onError={handleError}
            onClose={handleClose}
          />
        </Expand>
      )}
    </Box>
  );
};

export default CreateFormButton;
