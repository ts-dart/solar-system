import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SendFeedback from './SendFeedback';

import LogoSVG from '../images/logo.svg';
import LogoLinkedinGray from '../images/icons8-linkedin(gray).svg';
import LogoGithubGray from '../images/icons8-github(gray).svg';
import LogoFeedbackGray from '../images/icons8-feedback-50(gray).png';
import LogoLinkedinWhite from '../images/icons8-linkedin.svg';
import LogoGithubWhite from '../images/icons8-github.svg';
import LogoFeedbackWhite from '../images/icons8-feedback-50.png';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      currentUrl: '',
      showSendFeedbackComponent: false,
      logoFeedbackIs: LogoFeedbackGray,
      logoLinkedinIs: LogoLinkedinGray,
      logoGithubIs: LogoGithubGray,
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
      <>
        <header>
          <div id='div-container'>
            <div id='div-img-title'>
              <img src={LogoSVG} alt="icon-solar-system" />
              <h1>{title}</h1>
            </div>
            <div id='div-feedback-contacts-content'>
              <button
                className='make-part-send-feedback-component'
                onClick={() => this.setState((prev) => (
                  { showSendFeedbackComponent: !prev.showSendFeedbackComponent }
                ))}
                onMouseEnter={() => this.setState({ logoFeedbackIs: LogoFeedbackWhite })}
                onMouseLeave={() => this.setState({ logoFeedbackIs: LogoFeedbackGray })}
              >
                <img 
                  src={this.state.logoFeedbackIs} 
                  alt='img msg de texto' 
                  className={'img-logo-contact make-part-send-feedback-component'}
                  /* className='img-logo-contact'
                  className='make-part-send-feedback-component' */
                />
                <p className='make-part-send-feedback-component'>Feedback</p>
              </button>
              <a 
                href='https://www.linkedin.com/in/thiago-henrique-da-silva-souza-634162127/'
                target='_blank'
              >
                <button
                  onMouseEnter={() => this.setState({ logoLinkedinIs: LogoLinkedinWhite })}
                  onMouseLeave={() => this.setState({ logoLinkedinIs: LogoLinkedinGray })}
                >
                  <img src={this.state.logoLinkedinIs} alt='Logo do linkedin' className='img-logo-contact' />
                  <p>Linkedin</p>
                </button>
              </a>
              <a
                href='https://github.com/ts-dart'
                target='_blank'
              >
                <button
                  onMouseEnter={() => this.setState({ logoGithubIs: LogoGithubWhite })}
                  onMouseLeave={() => this.setState({ logoGithubIs: LogoGithubGray })}
                >
                  <img src={this.state.logoGithubIs} alt='Logo do github' className='img-logo-contact'/>
                  <p>GitHub</p>
                </button>
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
        {this.state.showSendFeedbackComponent 
          ? <SendFeedback 
              showSendFeedbackComponent={(param) => this.setState({ showSendFeedbackComponent: param })}
            />
          : null}
      </>
    );
  }
} 
