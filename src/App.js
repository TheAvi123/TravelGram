import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = () => {
  return <ThemeProvider theme={theme}>Hello world!</ThemeProvider>;
};

export default App;
