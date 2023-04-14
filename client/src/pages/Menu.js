import React from 'react';
import { 
  Container,
  Grid, 
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
} from '@mui/material';

const cards = [
  {
    title: 'Coffee',
    image: '/static/images/cards/contemplative-reptile.jpg',
    items: ['Espresso', 'Americano', 'Cafe Latte', 'Cappuccino', 'Cortardo']
  },
  {
    title: 'Non-coffee',
    image: '/static/images/cards/contemplative-reptile.jpg',
    items: ['Iced Tea', 'Hot Chocolate', 'Strawberry Smoothie', 'Coconut Water', 'Lemonade']
  },
  {
    title: 'Desserts',
    image: '/static/images/cards/contemplative-reptile.jpg',
    items: ['Macaron', 'Madeleine', 'Brownie', 'Tiramisu', 'Cannele']
  },
  {
    title: 'Food',
    image: '/static/images/cards/contemplative-reptile.jpg',
    items: ['Bagel', 'Sandwich', 'Caesar Salad', 'Tomato Soup', 'Avocado Toast']
  }
];

function Menu() {
  return (
  <Container maxWidth='lg'>
    <Grid item xs={12}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our menu</h2>
    <Divider sx={{ my: 5 }} />
    </Grid>
    
    <Grid container spacing={2}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ 
            width: '100%', 
            height: 400, 
            backgroundColor: index === 0 ? '#f3f3f3ff' : index === 1 ? '#dbd9d8' : index === 2 ? '#b9b1af' : '#c3b499 ',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2), 0px 0px 10px rgba(0, 0, 0, 0.14), 10px 10px 20px rgba(0, 0, 0, 0.12)'
          }}>
            <CardMedia
              component='img'
              alt={card.title}
              height='140'
              image={card.image}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div' style={{textAlign: 'center'}}>
                {card.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                  {card.items.map((item, index) => (
                    <li key={index} style={{textAlign: 'center'}}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}

export default Menu;