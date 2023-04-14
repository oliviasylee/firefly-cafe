import React from 'react';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../Newsletter';

function Footer () {
  return (
    <footer className='footer-container'>
      <Grid container className='footer' component='footer'>
      <Grid item xs={12}>
        <Newsletter />
      </Grid>
        <Grid item xs={12}>
          <ul className='socialIcons'>
            <li>
            <a href='/'>
                  <FacebookIcon fontSize='medium' style={{ color: 'white' }}>
                  </FacebookIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <TwitterIcon fontSize='medium' style={{ color: 'white' }}>
                  </TwitterIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <InstagramIcon fontSize='medium' style={{ color: 'white' }}>
                  </InstagramIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <YouTubeIcon fontSize='medium' style={{ color: 'white' }}>
                  </YouTubeIcon>
                </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12} sx={{ mt: -3.5 }}>
          <p className='footerText'>
          © Firefly Cafe 2023
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;