import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';
import NavBar from './components/NavBar/NavBar';
import TitleBar from './components/TitleBar';
import ProfileScreen from './screens/ProfileScreen';

const App = () => {
    return <ThemeProvider theme={theme}>
        <ProfileScreen />
        <AuthScreen />
    </ThemeProvider>;
};

export default App;
