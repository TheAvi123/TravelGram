import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (params) => {
  const encoded = { username: params.username, password: btoa(params.password) }
  const response = await axios.post('/auth/login', { ...encoded })
    .then(({ data }) => {
      return {
        token: data.access_token || data.data.access_token,
        error: false
      };
    })
    .catch(error => {
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

export const register = createAsyncThunk('user/register', async (params) => {
  const encoded = { email: params.email, username: params.username, password: btoa(params.password) }
  const response = await axios.post('/user/register', { ...encoded })
    .then(({ data }) => {
      return {
        error: false,
        token: data.access_token || data.data.access_token,
        user: {
          firstName: params.first_name,
          lastName: params.last_name,
          email: params.username
        }
      };
    })
    .catch(error => {
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

export const asyncLogout = createAsyncThunk('auth/logout', async (params) => {
  const response = await axios.post('/auth/logout', { ...params })
    .then(() => {
      return {
        error: false
      };
    })
    .catch(error => {
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
    token: '',
    user: {
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      icon: null
    },
    message: null,
    isLoading: false
  },
  reducers: {},
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
        state.token = payload.token;
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
        state.token = payload.token;
        state.user = payload.user;
        state.message = null;
      }
      return state;
    },
    [ register.rejected ]: (state, { payload }) => {
      state.message = payload.error;
      return state;
    },
    [ asyncLogout.pending ]: state => {
      state.isLoading = true;
      state.message = null;
      return state;
    },
    [ asyncLogout.fulfilled ]: (state, { payload }) => {
      if (payload.error) {
        state.message = payload.error;
      } else {
        state.token = '';
        state.user = {
          firstName: null,
          lastName: null,
          email: null,
          phone: null,
          icon: null
        };
        state.message = null;
      }
      return state;
    },
    [ asyncLogout.rejected ]: (state, { payload }) => {
      state.message = payload.error;
      return state;
    },
  }
});

export default authSlice.reducer;
