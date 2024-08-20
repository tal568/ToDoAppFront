import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#740606',
    },
    secondary: {
      main: '#067474',
    },
    error: {
      main: '#f44336',
    },
    
  },
})

export default theme;