import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3007';

export const login = createAsyncThunk('users/login', async (params) => {
  const encoded = { username: params[ 'Username' ], password: btoa(params[ 'Password' ]) };
  const response = await axios.post(url + '/users/login', { ...encoded })
    .then(({ data }) => {
      debugger;
      return {
        user: data.data,
        error: false
      };
    })
    .catch(error => {
      debugger
      try {
        let msg = 'ERROR!';
        const errors = error.response.data.data.errors;
        Object.keys(errors).map(key => errors[ key ].map(item => msg = `${msg}\n${item}`));
        return { error: msg };
      } catch (err) {
        try {
          return { error: error.response.data.message };
        } catch (e) {
          return { error: error.message || err }
        }
      }
    })
  return response;
});

export const register = createAsyncThunk('users/register', async (params) => {
  const encoded = { username: params[ 'Username' ], email: params[ 'Email' ], password: btoa(params[ 'Password' ]), first_name: params[ 'First Name' ], last_name: params['Last Name'] };
  const response = await axios.post(url + '/users/register', { ...encoded })
    .then(data => {
      debugger
      return {
        error: false,
        user: {
          firstName: params[ 'First Name' ],
          lastName: params[ 'Last Name' ],
          email: params[ 'Email' ],
          username: params[ 'Username' ],
          id: data.data._id
        }
      };
    })
    .catch(error => {
      debugger
      try {
        let msg = 'ERROR!';
        const errors = error.response.data.data.errors;
        Object.keys(errors).map(key => errors[ key ].map(item => msg = `${msg}\n${item}`));
        return { error: msg };
      } catch (err) {
        try {
          return { error: error.response.data.message };
        } catch (e) {
          return { error: error.message || err }
        }
      }
    })
  return response;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      firstName: null,
      lastName: null,
      username: null,
      email: null,
      phone: null,
      icon: null
    },
    message: null,
    isLoading: false
  },
  reducers: {
    logout: state => {
      state.user = {
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        phone: null,
        icon: null
      };
      return state;
    }
  },
  extraReducers: {
    [ login.pending ]: state => {
      state.isLoading = true;
      state.message = null;
      return state;
    },
    [ login.fulfilled ]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.error) {
        state.message = payload.error;
      } else {
        state.user = payload.user;
        state.message = null;
      }
      return state;
    },
    [ login.rejected ]: (state, { payload }) => {
      state.isLoading = false;
      state.message = payload.error;
      return state;
    },
    [ register.pending ]: state => {
      state.isLoading = true;
      state.message = null;
      return state;
    },
    [ register.fulfilled ]: (state, { payload }) => {
      if (payload.error) {
        state.message = payload.error;
      } else {
        state.user = payload.user;
        state.message = null;
      }
      return state;
    },
    [ register.rejected ]: (state, { payload }) => {
      state.message = payload.error;
      return state;
    }
  }
});

export const { logout } = authSlice;

export default authSlice.reducer;
