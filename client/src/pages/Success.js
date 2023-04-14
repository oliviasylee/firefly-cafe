import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import { 
  Typography,
  Container,
  Grid
} from '@mui/material';
import LeftImg from '../assets/success-left.webp';
import RightImg from '../assets/success-right.webp';

function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Container maxWidth='lg'>
      <Grid container alignItems='center'>
        <Grid item xs={3} style={{ textAlign: 'center' }}>
          <img src={LeftImg} style={{ maxWidth: '100%', maxHeight: '100%' }} alt='Success left'></img>
        </Grid>
        <Grid item xs={6} style={{ textAlign: 'center' }}>
          <Typography>
            <h1>Order Completed!</h1>
            <h3>Thank you for your order. <br />
                You will now be redirected to the home page.</h3>
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'center' }}>
          <img src={RightImg} style={{ maxWidth: '100%', maxHeight: '100%' }} alt='Success right'></img>
        </Grid>
      </Grid>
    </Container>
  );
}
  
export default Success;