import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Button,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Newsletter from '../Newsletter';

function Footer () {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);
  
  const handleInstallClick = async () => {
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('App installed successfully.');
      } else {
        console.log('App installation canceled.');
      }
      setInstallPrompt(null);
  };

  return (
    <footer className='footer-container'>
      <Grid container className='footer' component='footer'>
        <Grid item xs={12} md={6}>
          <Newsletter />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <ul className='socialIcons'>
            <li>
              <a href='/'>
                <FacebookIcon fontSize='medium' style={{ color: 'white' }} />
              </a>
            </li>
            <li>
              <a href='/'>
                <TwitterIcon fontSize='medium' style={{ color: 'white' }} />
              </a>
            </li>
            <li>
              <a href='/'>
                <InstagramIcon fontSize='medium' style={{ color: 'white' }} />
              </a>
            </li>
            <li>
              <a href='/'>
                <YouTubeIcon fontSize='medium' style={{ color: 'white' }} />
              </a>
            </li>
          </ul>
          <Button 
            variant='contained'
            size='small'
            onClick={handleInstallClick}
            sx={{
              mt: 2,
              color: 'white',
              width: '200px',
              backgroundColor: 'black',
              transition: 'background-color 0.2s ease, transform 0.2s ease',
              '&:hover': {
                backgroundColor: 'white',
                transform: 'scale(1.02)',
                color: 'black',
              },
            }}>
            <DownloadIcon/>
            Install App
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <p className='footerText'>
            © Firefly Cafe 2023
          </p>
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;