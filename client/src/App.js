import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Signup from './pages/Signup';
import Login from './pages/Login';

import Container from '@mui/material/Container';
import './App.css';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='app-wrapper' style={{ position: 'relative' }}>
          <div style={{ borderBottom: '3px solid #000', position: 'absolute', top: '50px', left: 0, right: 0 }} />
          <Container maxWidth='lg'>
            <Nav />
            <Routes>
              {/* <Route exact path='/shop' component={Shop} />
              <Route exact path='/learn' component={Learn} />
              <Route exact path='/menu' component={Menu} />*/}
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              {/* <Route exact path='/cart' element={<Cart />} /> */}
            </Routes>
          </Container>
        </div>
        <div className='app-content'>
          {/* home */}
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;