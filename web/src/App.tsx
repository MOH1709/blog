import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ display: 'flex' }}></Container>
    </ThemeProvider>
  );
}

export default App;
