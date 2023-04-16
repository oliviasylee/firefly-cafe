import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  useMediaQuery,
  useTheme,
  Divider,
  Typography,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';

import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART } from '../../utils/actions';

function Nav() {
  const [state, dispatch] = useStoreContext();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(760));

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  return (
    <header className='header'>
      <Grid container style={{ borderBottom: '1px solid #000', paddingBottom: '5px' }}>
        <Grid item xs={6}>
          <NavLink to='/'>
            <img src={logo} className='logo' alt='logo' />
          </NavLink>
        </Grid>
        <Grid item xs={6}>
          {isMobile ? (
            <IconButton onClick={toggleDrawer} color='inherit' aria-label='menu' sx={{ml: 'auto', justifyContent: 'flex-end', display:'flex'}}>
            <MenuIcon />
          </IconButton>
          ) : (
            <ul className='nav' style={{ height: '100%' }}>
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
                    <NavLink to='/' onClick={(event) => Auth.logout()} className='nav-link'>
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
                      Join
                    </NavLink>
                  </li>
                </>
              )}
              <li>
                <IconButton onClick={toggleCart} aria-label='open cart'>
                  <ShoppingCartIcon />
                </IconButton>
              </li>
            </ul>
          )}
        </Grid>
      </Grid>
      <Drawer 
        anchor='right' 
        open={isDrawerOpen} 
        onClose={toggleDrawer}>
          
        <List sx={{ width: 300 }} onClick={toggleDrawer}>
        <ListItem sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 2 }}>
        <Typography variant='h6' component='div' fontWeight='bold'>
          <img src={logo}  alt='logo' style={{ width: '80px', height: '80px' }} />
        </Typography>
        </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/shop'>
              <ListItemText primary='Shop' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/menu'>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
          {Auth.loggedIn() ? (
            <>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/order'>
                  <ListItemText primary='Order' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/' onClick={(event) => Auth.logout()}>
                  <ListItemText primary='Logout' />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/login'>
                  <ListItemText primary='Login' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }} component={NavLink} to='/signup'>
                  <ListItemText primary='Join' />
                </ListItemButton>
              </ListItem>
            </>
          )}
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={toggleCart}>
              {/* <ShoppingCartIcon /> */}
              <ListItemText primary='Cart' />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </header>
  );
}
export default Nav;