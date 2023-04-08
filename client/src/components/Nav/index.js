import React from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function Nav() {
  return (
    <Grid container>
      <div className='container'>
        <ul className='nav'>
          <li className='nav-item'>
            <NavLink to='/shop' activeClassName='nav-link active' className='nav-link'>
              Shop
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/learn' activeClassName='nav-link active' className='nav-link'>
              Learn
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/menu' activeClassName='nav-link active' className='nav-link'>
              Menu
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/login' activeClassName='nav-link active' className='nav-link'>
              Login
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/signup' activeClassName='nav-link active' className='nav-link'>
              Sign up
            </NavLink>
          </li>
        </ul>
      </div>
    </Grid>
  );
}

export default Nav;
