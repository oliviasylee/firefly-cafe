import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from '../../utils/helpers';
import { Typography, Grid, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = e => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <Grid container spacing={1} alignItems='center'>
      <Grid item xs={12} sm={4}>
        <Box display='flex' alignItems='center'>
          <img src={`/images/${item.image}`} alt='' height='70' />
          <Box mr={2} ml={2}>
            <Typography variant='subtitle1' style={{ marginBottom: '0.3rem' }}>{item.name}</Typography>
            <Typography variant='body2' color='textSecondary' style={{ marginBottom: '0.3rem' }}>${item.price}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box display='flex' alignItems='center' justifyContent='center'>
        <Box mr={3}>
          <Typography variant='body2' style={{ marginRight: '0.5rem' }}>Qty:</Typography>
          <input
            type='number'
            placeholder='1'
            min='1'
            value={item.purchaseQuantity}
            onChange={onChange}
            style={{ margin: '0 5px 0 0', width: '30px' }}
          />
        </Box>
        </Box>
      </Grid>
      <Grid item xs={12} sm={2} style={{ justifyContent: 'center' }}>
        <Typography variant='body2' style={{ textAlign: 'center' }}>Total: ${item.price * item.purchaseQuantity}</Typography>
      </Grid>
      <Grid item xs={12} sm={2}>
        <Box display='flex' alignItems='center' justifyContent='center'>
          <IconButton aria-label='delete' onClick={() => removeFromCart(item)} style={{ margin: '0 0.5rem' }}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CartItem;