import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Cart from './components/Cart/index';

import Signup from './pages/Signup';
import Login from './pages/Login';
import Detail from './pages/Detail';
import Shop from './pages/Shop';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Learn from './pages/Learn';
import Menu from './pages/Menu';

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
          <StoreProvider>
            <Container maxWidth='xl'>
              <Nav />
              <Cart />
                <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/shop' element={<Shop />} />
                  <Route exact path='/products/:id' element={<Detail />} />
                  <Route exact path='/learn' element={<Learn />} />
                  <Route exact path='/menu' element={<Menu />}  />
                  <Route exact path='/login' element={<Login />} />
                  <Route exact path='/signup' element={<Signup />} />
                  <Route exact path='/success' element={<Success />} />
                  <Route exact path='/order' element={<OrderHistory />} />
                </Routes>
            </Container>
          </StoreProvider>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;