import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SUBSCRIBE_EMAIL } from '../../utils/mutations';

import {
  Grid,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function Newsletter () {
  const [email, setEmail] = useState('')
  const [subscribeEmail] = useMutation(SUBSCRIBE_EMAIL);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    try {
      const { data } = await subscribeEmail({ variables: { email } });
      setMessage(`Thank you for subscribing, ${data.subscribeEmail.email}!`);
    } catch (error) {
      setMessage('Please enter a valid email address');
    }
    setEmail('');
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };
  
  return (
    <Grid item xs={12}>
      <h2>SUBSCRIBE AND STAY UPDATED</h2>
      <p>Join our email newsletter for exclusive offers, news, and events!</p>
      <FormControl onSubmit={handleSubmit} component='form'>
        <TextField
          label='Enter your email'
          type='email'
          variant='outlined'
          margin='dense'
          size='small'
          required
          fullWidth
          name='email'
          onChange={handleEmailChange}
          InputProps={{
            sx: { backgroundColor: '#fff' },
            style: { maxWidth: '100%', width: '400px'},
          }}
        />
        <Button
          className='button'
          type='submit'
          variant='contained'
          endIcon={<SendIcon />}
          fullWidth
          style={{ backgroundColor: '#8d93d9' }}
        >
          SUBSCRIBE
        </Button>
        <p>{message}</p>
      </FormControl>
    </Grid>
  );
}

export default Newsletter;