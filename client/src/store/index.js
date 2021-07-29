import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router/immutable';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function configureStore(history) {
  let middleware = [ routerMiddleware(history), thunk ];

  const enhancer = compose(applyMiddleware(...middleware));

  const store = createStore(
    rootReducer(history),
    enhancer
  );

  return store;
}
