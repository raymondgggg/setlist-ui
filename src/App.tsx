import {
  Container,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
})

function App() {
  console.log('test')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h3" gutterBottom>
            Welcome 🎉
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            useless button
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default App
