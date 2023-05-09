import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <img src="https://raw.githubusercontent.com/ts-dart/solar-system/main/src/images/icons8-solar-system-64.png" alt="icon-solar-system" />
        <div>
          <Link to='/home'><button>Home</button></Link>
          <Link to='/'><button>test</button></Link>
          <Link to='/'><button>test</button></Link>
          <Link to='/'><button>test</button></Link>
        </div>
      </header>
    );
  }
}

export default Header;
