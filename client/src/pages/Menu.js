import React, { useState } from 'react';
import { 
  Container,
  Grid, 
  Typography,
  Button,
  Box,
  Divider,
} from '@mui/material';

const cards = [    
  {        
    title: 'Coffee',        
    category: 'coffee',               
    items: [
      { name: 'Espresso', description: 'A true concentrated classic' },
      { name: 'Americano', description: 'A concentrated coffee beverage.' },
      { name: 'Cafe Latte', description: 'Espresso & steamed milk' },
      { name: 'Cappuccino', description: 'Espresso & foamy steamed milk' },
      { name: 'Cortardo', description: '5oz of espresso & steamed milk' },
      ]
    },
  {
    title: 'Non-coffee',
    category: 'non-coffee',
    items: [
      { name: 'TEA', description: 'A plethora of options from Rishi' },
      { name: 'HOT CHOCOLATE', description: 'Steamed milk & decadent dark chocolate' },
      { name: 'SMOOTHIE', description: 'Blended fruits & veggies with a choice of base' },
      { name: 'CHAI LATTE', description: 'Spicy chai blend & milk' },
      { name: 'KOMBUCHA', description: 'Fermented goodness and one of them has CBD' },
      ]
    },
  {
    title: 'Desserts',
    category: 'desserts',
    items: [
      { name: 'HAM & CHEESE CROISSANT', description: 'Flaky, cheesy, hammy - what more could you ask for?' },
      { name: 'CHOCOLATE CHIP COOKIES', description: 'Baked fresh, baked often' },
      { name: 'CHOCOLATE CROISSANT', description: 'It is literally all in the name' },
      { name: 'SCONES', description: 'Choice of blueberry, cinnamon chip, or chocolate' },
      { name: 'MUFFIN VARIETIES', description: 'Blueberry, Glorious Morning, Cranberry, Chocolate' },
      ] 
    },
  {
    title: 'Food',
    category: 'food',
    items: [
      { name: 'GRILLED CHEESE SANDWICH', description: "AKA a cheese toastie... we shouldn't have to explain" },
      { name: 'ALMOST FAMOUS CHICKEN SALAD', description: 'By the half pound' },
      { name: 'TOMATO SOUP', description: 'It is literally all in the name' },
      { name: 'AVOCAO TOAST', description: 'Our avocado toast is the perfect breakfast or brunch option with a twist' },
      { name: 'OVERNIGHT OATS', description: 'Oats, yogurt, skim milk, fresh fruit, & optional granola' },
    ]
  }
];

function Menu() {
  const [category, setCategory] = useState('coffee');

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  const filteredCards = category ? cards.filter(card => card.category === category) : cards;

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our menu</h2>
        </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          {['coffee', 'non-coffee', 'desserts', 'food'].map((categoryName) => (
            <Button 
              key={categoryName}
              variant='text' 
              sx={{ m: 1, p: 2, textAlign: 'center', color: 'black' }} 
              onClick={() => handleCategoryClick(categoryName)}
            >
              {category === categoryName ? (
                <Typography sx={{ fontWeight: 'bold',  borderBottom: '2px solid black' }}>{categoryName}</Typography>
              ) : (
                categoryName
              )}
              <Divider />
            </Button>
          ))}
        </Grid>
          <Grid container spacing={2} justifyContent='center'>
            {filteredCards.map((card, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Divider sx={{ my: 1 }} />
                <Box sx={{ p: 2 }}>
                  <Typography variant='body3' color='text.secondary'>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    {card.items.map((item, index) => (
                      <li key={index} style={{textAlign: 'center', marginBottom: '45px'}}>
                        <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{item.name}</div>
                        <div style={{ fontSize: '18px', color: '#666' }}>{item.description}</div>
                      </li>
                    ))}
                  </ul>
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Menu;