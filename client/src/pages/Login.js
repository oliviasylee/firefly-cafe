import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { 
  Grid, 
  TextField, 
  Button, 
  FormControl 
  } from '@mui/material';
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
    // marginTop: '100px'
  },
  input: {
    marginBottom: '16px',
    width: '600px',
  },
  button: {
    marginTop: '50px',
    color: 'white',
    width: '200px',
    backgroundColor: 'black',
    transition: 'background-color 0.2s ease, transform 0.2s ease',
    '&:hover': {
      backgroundColor: 'white',
      transform: 'scale(1.02)',
      color: 'black',
    },
  },
};

function Login(props) {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { 
          username: formState.username, 
          password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <Grid container style={styles.container}>
      <Grid item xs={12} style={styles.title}>
        <h2 style={styles.singupTitle}>Login</h2>
        <p style={{ textAlign: 'center' }}>Don't have an account? <a href='/signup' style={{ textDecoration: 'none' }}>Create one now</a></p>
      <FormControl component='form' onSubmit={handleFormSubmit}>
        <TextField
        name='username'
        label='username'
        type='username'
        variant='filled'
        margin='normal'
        style={styles.input}
        onChange={handleChange}
        required
        fullWidth
      />
        <TextField
          name='password'
          label='password'
          type='password'
          variant='filled'
          margin='normal'
          style={styles.input}
          onChange={handleChange}
          required
          fullWidth
        />
        {error ? (
          <div>
            <p className='error-text'>The provided credentials are incorrect.</p>
          </div>
        ) : null}
        <Grid container justifyContent='center'>
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
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Login;