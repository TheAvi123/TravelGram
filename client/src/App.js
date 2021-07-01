import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './screens/Dashboard/Dashboard';
import ViewTrip from './screens/ViewTrip/ViewTrip';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <AuthScreen /> */}
      {/*<Dashboard />*/}
      <ProfileScreen />
      {/* <ViewTrip /> */}
    </ThemeProvider>
  );
};

export default App;
