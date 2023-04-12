import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

import './style.css';
import { IconButton, Box, Button, Typography, List, ListItem, Divider, Link } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

import styled, { keyframes } from 'styled-components';
import { flash } from 'react-animations';

const Flash = styled.span`animation: 3s ${keyframes `${flash}`} infinite`;

// Stripe publishable key
const stripePromise = loadStripe('sk_test_51MvrAFJmPjVKp8qTid2sZ4Bz9Wlx1mZZWVEnqqwX0ysS4K0qKiQBskUQUtHqCTL29fVsuC6oMHVisebHquI73IRO00V64xgHk3sk_test_51MvrAFJmPjVKp8qTid2sZ4Bz9Wlx1mZZWVEnqqwX0ysS4K0qKiQBskUQUtHqCTL29fVsuC6oMHVisebHquI73IRO00V64xgHk3');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <Box className='cart-closed'>
        <IconButton onClick={toggleCart} aria-label='open cart'>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
    );
  }

  return (
    <Box className='cart'>
      <Box>
        <IconButton className='close' onClick={toggleCart} aria-label='close cart'>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant='h4' style={{ textAlign: 'center' }}>Cart</Typography>
      <h5 style={{textAlign: 'center', marginTop:'10px'}}>Free shipping on orders $30+</h5>
      <Divider />
      {state.cart.length ? (
        <div>
          <List>
            {state.cart.map((item) => (
              <ListItem key={item._id}>
                <CartItem item={item} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box className='flex-row space-between'>
            <Typography variant='h6'>Total: ${calculateTotal()}</Typography>

            {Auth.loggedIn() ? (
              <Button onClick={submitCheckout} variant='contained' color='primary'>
                Checkout
              </Button>
            ) : (
              <Typography>(log in to check out)</Typography>
            )}
          </Box>
        </div>
      ) : (
        <Typography 
          variant='h5' 
          align='center' 
          style={{marginTop:'30px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Flash>Your cart is empty!</Flash>
          <Button 
            variant='contained'
            size='large'
            component={Link} 
            to='/shop'
            sx={{
              mt: 5,
              color: 'white',
              width: '200px',
              backgroundColor: 'black',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'scale(1.02)',
                color: 'black',
              },
            }}>
            Shop Now
          </Button>
        </Typography>
            )}
    </Box>
  );
};

export default Cart;