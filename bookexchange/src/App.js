import "bootstrap/dist/css/bootstrap.min.css";

//
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';
import './App.css';

const App = () => {
  return(
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;