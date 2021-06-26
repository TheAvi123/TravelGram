import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';
import NavBar from './components/NavBar/NavBar';
import EditTrip from './pages/EditTrip';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <AuthScreen /> */}
      <EditTrip />
    </ThemeProvider>
  );
};

export default App;
