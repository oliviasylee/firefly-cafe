import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Container from '@mui/material/Container';
import Signup from './pages/Signup';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
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
  );
}

export default App;