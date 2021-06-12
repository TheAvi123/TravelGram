import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}>Hello world!</ThemeProvider>;
        </div>
    );
};

export default App;
