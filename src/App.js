import React from 'react';
import Router from './components/Router';

import './style/App.css';
import './style/HeaderStyle.css';
import './style/SolarSystemStyle.css';
import './style/StarDataStyle.css';

class App extends React.Component {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
