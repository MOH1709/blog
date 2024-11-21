import { createTheme } from '@mui/material/styles';

// Create a theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FC4453', // Blue
    },
    secondary: {
      main: '#f50057', // Pink
    },
    background: {
      default: '#f4f6f8', // Light background color
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
  },
  spacing: 8, // Sets the default spacing unit for MUI components
});

export default theme;
