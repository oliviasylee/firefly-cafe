import React, { useState } from 'react';
// import { validateEmail } from '../utils/helpers';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  singupTitle: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '0',
    marginTop: '100px'
  },
  input: {
    marginBottom: '16px',
    width: '600px',
  },
  button: {
    marginTop: '50px',
    color: 'black',
    width: '200px',
    backgroundColor: '#F4efe6',
    '&:hover': {
      backgroundColor: '#efd8c3ff',
      transform: 'scale(1.02)',
      color: 'black',
    },
  },
};

function Login(){
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12} style={styles.title}>
      <h2 style={styles.singupTitle}>Sign In</h2>
      <p style={{ textAlign: 'center' }}>Don't have an account? <a href='/signup' style={{ textDecoration: 'none' }}>Create one now</a></p>

        <TextField
        label='Username'
        type='text'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
      />
        <TextField
          label='Password'
          type='password'
          variant='filled'
          margin='normal'
          style={styles.input}
          required
          fullWidth
        />
        <Button
          className='button'
          type='submit'
          variant='contained'
          color='primary'
          sx={styles.button}
          endIcon={<SendIcon />}
          fullWidth>
          Login
         </Button>
      </Grid>
    </Grid>
  );
}

export default Login;