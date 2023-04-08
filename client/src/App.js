import React from 'react';
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer'
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