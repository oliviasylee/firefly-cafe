import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

import { 
  Box, 
  Typography, 
  Grid, 
  Container,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
    console.log(user)
  } else {
    console.log(user)
  }

  return (
    <>
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ my: 1 }}>
            <Link to='/shop' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <ArrowBackIcon />
            <h3 style={{ marginLeft: '5px' }}>Back to Products</h3>
            </Link>
            <Divider sx={{ my: 1 }} />
        {user ? (
          <>
            <Typography variant='h4' sx={{ mt: 2 }}>
              Order History for {user.firstName} {user.lastName}
            </Typography>
            {user.orders.map((order) => (
              <Box key={order._id} sx={{ my: 2 }}>
                <Typography variant='h5'>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <Box
                      key={index}
                      sx={{
                        p: 1,
                        width: { xs: '100%', sm: '50%', md: '25%' },
                      }}
                    >
                      <Link to={`/products/${_id}`}>
                        <img
                          alt={name}
                          src={`/images/${image}`}
                          style={{ width: '100%', height: 'auto' }}
                        />
                        <Typography variant='h6'>{name}</Typography>
                      </Link>
                      <Typography variant='subtitle1'>${price}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </>
        ) : (
          <Typography variant='h5' sx={{ my: 2, mb: 20, mt: 5 }}>
          Please <Link to='/login'>log in</Link> to view your order history.
        </Typography>
        )}
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default OrderHistory;