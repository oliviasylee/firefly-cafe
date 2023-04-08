import React from 'react';
import Header from './components/Header/index'
import Nav from './components/Nav/index';
import Footer from './components/Footer/index'
import Container from '@mui/material/Container';
import './App.css';

function App() {
  return (
    <Container maxWidth='xl'>
        <Header />
        <Nav />
        <Footer />
    </Container>
  );
}

export default App;