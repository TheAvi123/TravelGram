import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';
import NavBar from './components/NavBar/NavBar';

const App = () => {
    return <ThemeProvider theme={theme}>
        <AuthScreen />
    </ThemeProvider>;
};

export default App;
