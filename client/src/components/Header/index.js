import React from 'react';
import Nav from '../Nav';
import Grid from '@mui/material/Grid';
// import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Grid container alignItems='center'>
        <Grid item xs={6}>
            <img src='/fluffy-goggles/images/logo.png' className='logo' alt='logo' />
        </Grid>
        <Grid item xs={6}>
          <Nav />
        </Grid>
      </Grid>
    </header>
  );
}

export default Header;
