import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './screens/Dashboard/Dashboard';
import ViewTrip from './screens/ViewTrip/ViewTrip';
import EditProfileScreen from './screens/EditProfileScreen';
import ProfileCard from './components/Profile/ProfileCard';
import ProfilePic from './components/Profile/ProfilePic';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <AuthScreen /> */}
      {/*<Dashboard />*/}
      <EditProfileScreen />
      <ProfilePic clickable={true} size={"medium"}/>
      <ProfilePic clickable={false} size={"large"}/>
      {/* <ViewTrip /> */}
    </ThemeProvider>
  );
};

export default App;