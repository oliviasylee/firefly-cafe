import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';

import { IconButton, Box, Button, Typography, List, ListItem, Divider } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

// Stripe publishable key
const stripePromise = loadStripe('pk_test_51MvScAJ5laDK23YULksEH64Ogy9CBzjdxJgh52gJ6tHN5HQT91ioRc6B2ar52RUaWkIVx72xIkwnb9Ps9TmHrFjq00xggLFja6');

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
      <Typography variant='h4'>Shopping Cart</Typography>
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
        <Typography variant='h5'>
          <span role='img' aria-label='shocked'>
            😱
          </span>
          Your cart is empty
        </Typography>
      )}
    </Box>
  );
};

export default Cart;