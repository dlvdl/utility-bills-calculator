import React from 'react'
import { Typography, Container, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        m={20}
        p={20}
        display="flex"
        justifyContent="center"
        bgcolor="CaptionText"
        borderRadius={1}
      >
        <Typography variant="p" align="center">
          Take control of your utility bills with our powerful cost calculator
          tool. Get accurate estimates and make informed decisions about your
          energy usage.
        </Typography>
      </Box>
      <Box m={5} display="flex" justifyContent="center">
        <Button variant="contained" color="primary">
          <Link to="/calculator">
            <Typography textTransform="capitalize">Get started</Typography>
          </Link>
        </Button>
      </Box>
    </Container>
  )
}

export default Home
