import logo from './logo.svg';
import './Home.css';

import { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Container } from 'postcss';
import axios from "axios"

import Home from './Home'
import Contact from './Contact';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
  )
  }
}

export default App;
