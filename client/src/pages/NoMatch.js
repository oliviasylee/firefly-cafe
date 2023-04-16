import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Typography, 
  Grid,
  Button,
} from '@mui/material';

const NoMatch = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}  style={{ textAlign: 'center'}}>
          <Typography variant='h1'>404</Typography>
          <Typography variant='h4' sx={{ mt: 5 }}>Oops, looks like we spilled the coffee! <br />
          This page doesn't exist.</Typography>
            <Button 
            variant='contained'
            size='large'
            component={Link} 
            to='/shop'
            sx={{
              mt: 2,
              color: 'white',
              width: '300px',
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
            Let's get a new cup
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NoMatch;