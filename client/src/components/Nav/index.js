import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';
import { NavLink } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import logo from '../../images/logo.png';
import { Grid } from '@mui/material';


function Nav() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <Grid container style={{ borderBottom: '1px solid #000', paddingBottom: '10px' }}>
      <Grid item xs={6}>
        <NavLink to='/'>
          <img src={logo} className='logo' alt='logo' />
        </NavLink>
      </Grid> 
      <Grid item xs={6}>
        <ul className={scroll ? 'nav bubble bub' : 'nav'}>
          <li>
            <NavLink to='/'>
            <img src={logo} className={scroll ? "scroll-logo" : "hidden"} alt='logo' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/shop' className='nav-link'>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to='/learn' className='nav-link'>
              Learn
            </NavLink>
          </li>
          <li>
            <NavLink to='/menu' className='nav-link'>
              Menu
            </NavLink>
          </li>
          {Auth.loggedIn() ? (
            <>
              <li>
                <NavLink to='/order' className='nav-link'>
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  onClick={(event) => Auth.logout()}
                  className='nav-link'
                >
                  Logout
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to='/login' className='nav-link'>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='/signup' className='nav-link'>
                  Sign up
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to='/cart' className='nav-link'>
              <ShoppingBagIcon
                fontSize='medium'
                style={{ color: 'black' }}
              />
            </NavLink>
          </li>
        </ul>
      </Grid>
    </Grid>
  );
}

export default Nav;