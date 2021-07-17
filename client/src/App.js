import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { ThemeProvider } from '@material-ui/core/styles';

import configureStore from './store';
import Layout from './components/Layout';
import theme from './theme';
import Dashboard from './screens/Dashboard/Dashboard';
import ViewTrip from './screens/ViewTrip/ViewTrip';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';


const history = createBrowserHistory();
const store = configureStore(history);

/* 
  Any route that can only be accessed by logged in users should be passed through
  ProtectedRoute rather than the normal Route
*/
function ProtectedRoute({ Component, ...props }) {
  // TODO: setup token auth (local storage? cookie?)
  //const hasToken = store.getState() && store.getState().auth && store.getState().auth.token;
  return (
    <Route
      {...props}
      //render={() => hasToken ? <Component {...props} /> : <Redirect to="/login" />}
      render={() => <Component {...props} />}
    />
  );
}

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Router history={history}>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <ProtectedRoute path="/Dashboard" Component={Dashboard} />
                <ProtectedRoute path="/trip" Component={ViewTrip} />
                {/* TODO: route '/' to a homepage instead of personal dashboard */}
                <ProtectedRoute path="/" Component={Dashboard} />
              </Switch>
            </Router>
          </Layout>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
