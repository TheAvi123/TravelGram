import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import AuthScreen from './screens/AuthScreen';

const App = () => {
    return <ThemeProvider theme={theme}>
        <AuthScreen />
    </ThemeProvider>;
};

export default App;
