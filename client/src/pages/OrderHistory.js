import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Typography, Grid, Container } from '@mui/material';
import { QUERY_USER } from '../utils/queries';

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
    console.log(user)
  }

  return (
    <>
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={{ my: 1 }}>
            <Link to='/shop'>← Back to Products</Link>
        {user ? (
          <>
            <Typography variant='h4' sx={{ mt: 2 }}>
              Order History for {user.firstName} {user.lastName}
            </Typography>
          {console.log(user.orders)}
            {user.orders.map((orders) => (
              <Box key={orders._id} sx={{ my: 2 }}>
                <Typography variant='h5'>
                  {new Date(parseInt(orders.purchaseDate)).toLocaleDateString()}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                  {console.log(orders.products)}
                  {orders.products.map(({ _id, image, name, price }, index) => (
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
          <Typography variant='h5' sx={{ my: 2 }}><br />
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