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
        console.log('cart', cart)
        console.log('item in cart', itemInCart);

       if(itemInCart) {
            console.log('purchase quantity', itemInCart.purchaseQuantity)
            
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
                        height='180'
                        image={`${image}`}
                    />
                    <CardContent>
                        <Link
                        to={`/products/${_id}`}
                        component='div'
                        >
                                {name}
                        </Link>
                        <Typography variant='body2' color='text.secondary'>
                                Price: ${price}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                            {quantity} {pluralize("item", quantity)} in stock
                        </Typography>
                        <CardActions>
                        <Button 
                            variant='contained'
                            size='small'
                            onClick={addToCart} 
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
                            }}>
                            Add to cart
                        </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
         </Container>
      );
    }

export default ProductItem;