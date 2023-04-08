import React from 'react';
import Nav from './components/Nav/index.js';
// import Footer from './components/Footer/index.js';
import Container from '@mui/material/Container';
import './App.css';

export default function App() {
  return (
    <Container maxWidth='xl'>
        <Nav />
        <Footer />
    </Container>
  );
}