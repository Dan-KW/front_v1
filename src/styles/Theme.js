import { createTheme } from '@mui/material/styles';
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
      }, 
    }, 
  },
});
export default createTheme(myTheme);
