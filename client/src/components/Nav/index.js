import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from '../../images/logo.png'

function Nav() {
  return (
    <Grid container>
      <Grid item xs={6}>
        <NavLink
          exact to='/'>
        <img src={logo} className='logo' alt='logo' />
        </NavLink>
      </Grid>

      <Grid item xs={6} style={{ height: '100%' }}>
        <ul className='nav'>
          <li>
            <NavLink to='/shop' className='nav-link' activeClassName='active'>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/learn' className='nav-link' activeClassName='active'>
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu' className='nav-link' activeClassName='active'>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='nav-link' activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='nav-link' activeClassName='active'>
              Sign up
            </NavLink>
          </li>
          
          <li>
            <NavLink to='/cart' className='nav-link' activeClassName='active'>
              <ShoppingBagIcon fontSize='medium' style={{ color: 'black' }} />
            </NavLink>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Nav;