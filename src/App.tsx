import {
  Container,
  Typography,
  Button,
  Box,
} from '@mui/material'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
