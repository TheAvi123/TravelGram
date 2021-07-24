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

const CreateFormButton = ({
  formType,
  onSuccess,
  onError,
  onClose,
  tripId,
  onClick,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  const handleSuccess = (data) => {
    setFormMessage(`Success: ${data.title} is created!`);
    setShowSuccess(true);
    const timer = setTimeout(() => {
      onClick(false);
      setShowForm(false);
      setShowSuccess(false);
      clearTimeout(timer);
    }, 3000);
    onSuccess(data);
  };

  const handleError = (data) => {
    setFormMessage(`Error: ${data.title} could not be created!`);
    setShowError(true);
    const timer = setTimeout(() => {
      onClick(false);
      setShowForm(false);
      setShowError(false);
      clearTimeout(timer);
    }, 3000);
  };

  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {!showForm && (
        <Button
          variant='contained'
          onClick={() => {
            onClick(true);
            setShowForm(true);
          }}
          style={{ maxWidth: '200px', margin: '30px auto' }}>
          {formType === 'trip'
            ? 'Create Trip'
            : formType === 'tripitem'
            ? 'Add Trip Item'
            : ''}
        </Button>
      )}
      {showSuccess && <Alert severity='success'>{formMessage}</Alert>}
      {showError && <Alert severity='error'>{formMessage}</Alert>}
      {showForm && (
        <Expand open={showForm} duration={400}>
          <CreateForm
            formType={formType}
            onSuccess={handleSuccess}
            onError={handleError}
            onClose={() => {
              onClick(false);
              setShowForm(false);
            }}
            tripId={tripId}
          />
        </Expand>
      )}
    </Box>
  );
};

export default CreateFormButton;
