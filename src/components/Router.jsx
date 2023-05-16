import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SolarSystem from '../pages/SolarSystem';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/solarsystem" element={ <SolarSystem /> }/>
          <Route path="/home" element={ <Home /> } />
          <Route path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}
