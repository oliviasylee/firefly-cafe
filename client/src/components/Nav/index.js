import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from '../../images/logo.png'
import Auth from '../../utils/auth'

function Nav() { 
  
  if (Auth.loggedIn()) {
    return (
      <Grid container>
        <Grid item xs={6}>
          <NavLink to='/'>
          <img src={logo} className='logo' alt='logo' />
          </NavLink>
        </Grid>
  
        <Grid item xs={6} style={{ height: '100%' }}>
          <ul className='nav'>
            <li>
              <NavLink 
                to='/shop' 
                className='nav-link' >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to='/learn' className='nav-link' >
                Learn
              </NavLink>
            </li>
            <li>
              <NavLink to='/menu' className='nav-link' >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to='/' onClick={(event) => Auth.logout} className='nav-link' >
                Logout
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart' className='nav-link' >
                <ShoppingBagIcon fontSize='medium' style={{ color: 'black' }} />
              </NavLink>
            </li>
          </ul>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid container>
      <Grid item xs={6}>
        <NavLink to='/'>
        <img src={logo} className='logo' alt='logo' />
        </NavLink>
      </Grid>

      <Grid item xs={6} style={{ height: '100%' }}>
        <ul className='nav'>
          <li>
            <NavLink 
              to='/shop' 
              className='nav-link' >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/learn' className='nav-link' >
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu' className='nav-link' >
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to='/login' className='nav-link' >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/signup' className='nav-link' >
              Sign up
            </NavLink>
          </li>
          
          <li>
            <NavLink to='/cart' className='nav-link' >
              <ShoppingBagIcon fontSize='medium' style={{ color: 'black' }} />
            </NavLink>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Nav;