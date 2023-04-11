import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

import {
  Grid,
  TextField,
  Button,
  FormControl,
  Snackbar,
  Alert,
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
    marginTop: '100px'
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

function Signup(props) {
  const [formState, setFormState] = useState({ 
    username: '',
    email: '',
    password: '' });
  const [addUser] = useMutation(ADD_USER);
  const [showAlert, setShowAlert] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await addUser({
        variables: {
          firstName: formState.firstName,
          lastName: formState.lastName,
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
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
        <h2 style={styles.singupTitle}>Create Account</h2>
        <p style={{ textAlign: 'center' }}>
          Already have an account?{' '}
          <Link to='/login' style={{ textDecoration: 'none' }}>
            Login here
          </Link>
        </p>

    <FormControl component='form' onSubmit={handleFormSubmit}>
      <Snackbar
        open={showAlert}
        autoHideDuration={6000}
        onClose={() => setShowAlert(false)}
        sx={{ backgroundColor: 'red' }}
      >
        <Alert
          onClose={() => setShowAlert(false)}
          severity='error'
        >
          Something went wrong with your signup!
        </Alert>
      </Snackbar>

      <TextField
        label='First Name'
        type='text'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
        name='firstName'
        onChange={handleChange}
        value={formState.firstName}
      />
      <TextField
        label='Last Name'
        type='text'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
        onChange={handleChange}
        name='lastName'
        value={formState.lastName}
      />
      <TextField
        label='Username'
        type='username'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
        name='username'
        onChange={handleChange}
        value={formState.username}
      />
      <TextField
        label='Email'
        type='email'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
        onChange={handleChange}
        name='email'
        value={formState.email}
      />
      <TextField
        label='Password'
        type='password'
        variant='filled'
        margin='normal'
        style={styles.input}
        required
        fullWidth
        name='password'
        onChange={handleChange}
        value={formState.password || ''}
        />
      <Grid container justifyContent='center'>
        <Button
          className='button'
          type='submit'
          variant='contained'
          color='primary'
          sx={styles.button}
          endIcon={<SendIcon />}
          fullWidth
        >
          Register
        </Button>
      </Grid>
    </FormControl>
  </Grid>
</Grid>
  );
}

export default Signup;