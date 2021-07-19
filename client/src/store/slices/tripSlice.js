import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const viewTrip = createAsyncThunk('trip/view', async (params) => {
  const response = await axios
    .get('/trip/view', { ...params })
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  return response;
});

export const getTrips = createAsyncThunk('trips', async (params) => {
  debugger;
  const response = await axios
    .get('/trip', { ...params })
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  debugger;
  return response;
});

export const addTrip = createAsyncThunk('trip/add', async (params) => {
  const response = await axios
    .post('/trip/add', { ...params })
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  return response;
});

export const deleteTrip = createAsyncThunk('trip/delete', async (params) => {
  const response = await axios
    .post('/trip/delete', { ...params })
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  return response;
});

export const editTrip = createAsyncThunk('trip/edit', async (params) => {
  const response = await axios
    .post('/trip/edit', { ...params })
    .then(({ data }) => data)
    .catch((error) => console.log(error));
  return response;
});

export const tripSlice = createSlice({
  name: 'trip',
  initialState: {},
  reducers: {},
  extraReducers: {
    [viewTrip.pending]: (state) => {
      return state;
    },
    [viewTrip.fulfilled]: (state, { payload }) => {
      return state;
    },
    [viewTrip.rejected]: (state, { payload }) => {
      return state;
    },
    [addTrip.pending]: (state) => {
      return state;
    },
    [addTrip.fulfilled]: (state, { payload }) => {
      return state;
    },
    [addTrip.rejected]: (state, { payload }) => {
      return state;
    },
    [deleteTrip.pending]: (state) => {
      return state;
    },
    [deleteTrip.fulfilled]: (state, { payload }) => {
      return state;
    },
    [deleteTrip.rejected]: (state, { payload }) => {
      return state;
    },
    [editTrip.pending]: (state) => {
      return state;
    },
    [editTrip.fulfilled]: (state, { payload }) => {
      return state;
    },
    [editTrip.rejected]: (state, { payload }) => {
      return state;
    },
  },
});

export default tripSlice.reducer;
