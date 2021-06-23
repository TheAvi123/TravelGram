import { createMuiTheme } from '@material-ui/core/styles';

// TODO: add more custom theming
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#FFF5EB',
        },
        secondary: {
            main: '#DEEDF0',
        },
        tertiary: {
          main: '#F4C7AB',
        },
        quaternary: {
           main: '#B2B8A3'
        },
    },
});

export default theme;
