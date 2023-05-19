import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogoSVG from '../images/logo.svg';

export default class Header extends Component {
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
        <div id='div-container'>
          <div id='div-img-title'>
            <img src={LogoSVG} alt="icon-solar-system" />
            <h1>{title}</h1>
          </div>
          <div id='div-feedback-contacts'>
            <button>Feedback</button>
            <a 
              href='https://www.linkedin.com/in/thiago-henrique-da-silva-souza-634162127/'
              target='_blank'
            >
              <button>Linkedin</button>
            </a>
            <a
              href='https://github.com/ts-dart'
              target='_blank'
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>
        <nav>
          <Link to='/home' className={currentUrl === '/' || currentUrl === '/home'?'selected-nav':''}>
            <button>Home</button>
          </Link>
          <Link to='/solarsystem' className={currentUrl === '/solarsystem'?'selected-nav':''}>
            <button>Siatema solar</button>
          </Link>
          <Link to='/'><button>pass</button></Link>
          <Link to='/'><button>pass</button></Link>
        </nav>
      </header>
    );
  }
} 
