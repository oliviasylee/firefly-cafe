import React from 'react';
import { 
  Container,
  Grid, 
  Divider,
} from '@mui/material';
import image from '../assets/learn.webp';

function Learn() {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12}>
        <h2 style={{ textAlign: 'center', fontSize: '1.5rem', }}>
          "Coffee is a social binder, a warmer of tongues, a soberer of minds, a stimulant of wit, a foiler of sleep if you want it so. From roadside mugs to the classic demi-tasse, it is the perfect democrat." <br /></h2>
          <h4 style={{ textAlign: 'center',fontWeight: 300 }}>- Richard Selzer, "Coffee and Repartee," 1979 </h4>
          <br />
          <Divider sx={{ my: 1 }} />
          <Grid container>
            <Grid item xs={12} md={4}>
            <img alt='learn' className='learnImg' src={image}></img>
            </Grid>
            <Grid item xs={12} md={8}>
            <p className='learnText'>
            At Firefly Cafe, we believe in the power of coffee to bring people together and foster connections. Our passion for coffee extends beyond its ability to stimulate the senses. <br /><br />It's a tool for creativity, thoughtful conversations, and community building. Join us at Firefly Cafe and experience the magic of coffee in a space that celebrates connection and creativity.<br /><br />
            From classic blends to specialty roasts, we offer a variety of handcrafted coffees to satisfy every taste.</p>

            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Learn;