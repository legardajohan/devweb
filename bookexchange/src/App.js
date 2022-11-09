import "bootstrap/dist/css/bootstrap.min.css";

//
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;