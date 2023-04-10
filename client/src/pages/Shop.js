import React from 'react';
import ProductList from '../components/ProductList';
import CategoryMenu from '../components/CategoryMenu';
// import Cart from '../components/Cart';

import Grid from '@mui/material/Grid';

function Shop() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CategoryMenu /> <br /><br /><br />
        <ProductList />
      </Grid>
    </Grid>
  );
};

export default Shop;