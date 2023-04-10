import React from 'react';
import { Link } from 'react-router-dom';
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { pluralize, idbPromise } from '../../utils/helpers'
import { 
  Grid,
  Container,
  Card,  
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';

function ProductItem(item) {
    const [state, dispatch] = useStoreContext();

    const {
        _id,
        name,
        price,
        image,
        quantity,
    } = item;

    const { cart } = state

    const addToCart = () => {
        const itemInCart = cart.find((cartItem) => cartItem._id === _id);
        if(itemInCart) {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
            idbPromise('cart', 'put', {
                ...itemInCart,
                purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
            });
    } else {
        dispatch({
          type: ADD_TO_CART,
          product: { ...item, purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
      }
    }
      
      return(
         <Container maxWidth='lg'>
            <Grid container spacing = {2} item xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component='img'
                        alt='penguin'
                        height='140'
                        image={`/images/${image}`}
                    />
                    <CardContent>
                        <Link
                        to={`/products/${_id}`}
                        // gutterBottom variant='h5'
                        component='div'
                        >
                                Title: {name}
                        </Link>
                        <Typography variant='body2' color='text.secondary'>
                                Price: ${price}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {quantity} {pluralize("item", quantity)} in stock
                        </Typography>
                        <CardActions>
                            <Button
                            size='small'
                            onClick={addToCart}  
                            >Add to cart
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
         </Container>
      );
    }

export default ProductItem;