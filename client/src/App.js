import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper' style={{ borderBottom: '3px solid #000', marginTop: '40px', padding: '16px' }}>
        <Container maxWidth='lg'>
          <Nav />
        </Container>
      </div>
      <div className='app-content'>
        {/* home */}
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;