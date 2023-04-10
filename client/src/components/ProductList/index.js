import React from 'react';

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

function ProductList() {
  return (
    <Container maxWidth='lg'>
    <Grid container spacing={2} item xs={12}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        alt='green iguana'
        height='140'
        image='/static/images/cards/contemplative-reptile.jpg'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          Title - Name
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Price
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          500 items in stock
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Add to cart</Button>
      </CardActions>
    </Card>
    </Grid>
    </Container>
  );
}

export default ProductList;
