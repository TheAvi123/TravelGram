import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router';
import authReducer from './slices/authSlice';
import tripReducer from './slices/tripSlice';

const rootReducer = (history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    trip: tripReducer
  })
);

export default rootReducer;
