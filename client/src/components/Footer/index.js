import React from 'react';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer () {
  return (
    <footer className='footer-container'>
      <Grid container className='footer' component='footer'>
        <Grid item xs={12}>
          <ul className='socialIcons'>
            <li>
            <a href='/'>
                  <FacebookIcon fontSize='large' style={{ color: 'white' }}>
                  </FacebookIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <TwitterIcon fontSize='large' style={{ color: 'white' }}>
                  </TwitterIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <InstagramIcon fontSize='large' style={{ color: 'white' }}>
                  </InstagramIcon>
                </a>
            </li>
            <li>
            <a href='/'>
                  <YouTubeIcon fontSize='large' style={{ color: 'white' }}>
                  </YouTubeIcon>
                </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <p className='footerText'>
            Developed by Fluppy goggles <br />
            Copyright ©2023. All rights reserved.
          </p>
        </Grid>
      </Grid>
  </footer>
  // </div>
  );
}

export default Footer;