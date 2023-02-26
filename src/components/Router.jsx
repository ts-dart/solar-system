import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={ <Home /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}
