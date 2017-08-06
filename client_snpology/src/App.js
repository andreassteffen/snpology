import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {Container} from 'reactstrap';

const App = () => (
  <div>
    <Header />
    <Container >
      <Main />
    </Container>
  </div>
)

export default App;
