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

import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Cart from './components/Cart/index';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Detail from './pages/Detail';

import Shop from './pages/Shop';

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
            {/* <Home /> */}
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/shop' element={<Shop />} />
              <Route exact path='/products/:id' 
                element={<Detail />} 
              />
              {/*<Route exact path='/learn' component={Learn} />
              <Route exact path='/menu' component={Menu} />*/}
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/signup' element={<Signup />} />
              {/* <Route exact path='/cart' element={<Cart />} /> */}
            </Routes>
          </Container>
        </StoreProvider>
        </div>
        <div className='app-content'>
          {/* <Home /> */}
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;