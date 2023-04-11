import React from 'react';
import Container from '@mui/material/Container';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import backgroundImage from '../assets/main.webp';

function Home() {
  return (
    <Container
      maxWidth='xl'
      sx={{
        height: '100vh',
        backgroundColor: '#1d0f8f',
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography variant='h4' component='p' color='black' textAlign='center'>
        From farm to brew, <br />
        a trusted coffee experience. <br />
      </Typography>
      <Button 
        variant='contained'
        size='large'
        component={Link} 
        to='/shop'
        sx={{
          mt: 2,
          color: 'white',
          width: '200px',
          backgroundColor: 'black',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
          '&:hover': {
            backgroundColor: 'white',
            transform: 'scale(1.02)',
            color: 'black',
          },
          marginTop: '40px'
        }}
      >
        Shop Now
      </Button>
    </Container>
  );
}

export default Home;