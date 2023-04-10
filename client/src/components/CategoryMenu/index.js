import React from 'react';

import { 
  Container,
  Grid, 
  Button, 
  } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

function CategoryMenu() {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <h2>Filter by <FilterListIcon fontSize='small' style={{ color: 'black' }}></FilterListIcon></h2>
          <Button 
            variant='outlined'
            size='medium'
            color='info'>
            Coffee
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CategoryMenu;
