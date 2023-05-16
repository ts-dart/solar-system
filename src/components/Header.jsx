import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../images/logo.svg';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      currentUrl: '',
    };
  }

  componentDidMount() {
    this.getCurrentUrl();
  }

  getCurrentUrl() {
    const currentUrl = window.location.pathname;
    this.setState({ currentUrl });
  }

  render() {
    const { title } = this.props;
    const { currentUrl } = this.state;

    return (
      <header>
        <div id='div-img-title'>
          <img src={LogoSVG} alt="icon-solar-system" />
          <h1>{title}</h1>
        </div>
        <nav>
          <Link to='/home' className={currentUrl === '/' || currentUrl === '/home'?'selected-nav':''}>
            <button>Home</button>
          </Link>
          <Link to='/solarsystem' className={currentUrl === '/solarsystem'?'selected-nav':''}>
            <button>Siatema solar</button>
          </Link>
          <Link to='/'><button>test</button></Link>
          <Link to='/'><button>test</button></Link>
        </nav>
      </header>
    );
  }
}

export default Header;
