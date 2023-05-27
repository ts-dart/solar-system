import React from 'react';

import CloseWindowPngGray from '../images/icons8-close-window-gray.png';
import CloseWindowPngWhite from '../images/icons8-close-window-white.png';

export default class SendFeedback extends React.Component {
  constructor() {
    super();
    this.state = {
      btnCloseWindow: CloseWindowPngGray, 
      email: '',
      contentEmail: '',
      resp: '',
      sent: '',
    };

    this.handleClickOutSide = this.handleClickOutSide.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutSide);
  }

  handleClickOutSide(event) {
    const { showSendFeedbackComponent } = this.props;
    if (!event.target.classList.contains('make-part-send-feedback-component')) {
      showSendFeedbackComponent(false);
    }
  }

  handleInputs({ target }) {
    this.setState({ [target.name]: target.value })
  }

  render() {
    const { showSendFeedbackComponent } = this.props;
    const { btnCloseWindow, email, contentEmail, sent } = this.state;

    return (
      <div 
        id='div-send-feedback-component' 
        className='make-part-send-feedback-component'
      >
        <div 
          id='div-send-feedback-component-btns'
          className='make-part-send-feedback-component'
        >
          <button
            id='btn-close-window-feedback-component'
            className='make-part-send-feedback-component' 
            onClick={() => showSendFeedbackComponent(false)}
            onMouseEnter={() => this.setState({ btnCloseWindow: CloseWindowPngWhite })}
            onMouseLeave={() => this.setState({ btnCloseWindow: CloseWindowPngGray })}
          >
            <img
              src={btnCloseWindow}
              alt='imagem de um x para fechar janela'
            />
          </button>
          <button 
            id='btn-send-feedback-component'
            className='make-part-send-feedback-component'
            onClick={() => {
              fetch('https://send-email-server-8dgtsonr0-ts-dart.vercel.app/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  contentEmail: this.state.contentEmail,
                  email: this.state.email
                })
              })
              .then((data) => data.json())
              .then((data) => this.setState({ sent: data.sent }));
            }}
          >
            Enviar
          </button>
        </div>
        <div className='make-part-send-feedback-component'>
          {sent === '' 
            ? (
              <>
                <input
                  type='text' 
                  placeholder='Seu email' 
                  id='in-send-feedback-component' 
                  className='make-part-send-feedback-component'
                  value={email}
                  name='email'
                  onChange={(event) => this.handleInputs(event)}
                />
                <textarea 
                  className='make-part-send-feedback-component' 
                  id='ta-send-feedback-component' 
                  placeholder='Seu feedback' 
                  cols='39' 
                  rows='9'
                  value={contentEmail}
                  name='contentEmail'
                  onChange={(event) => this.handleInputs(event)}
                ></textarea>
              </>
              )
            : sent 
              ? <p 
                  className='p-feedback-email make-part-send-feedback-component'
                >Email enviado com sucesso</p>
              : <p
                  className='p-feedback-email make-part-send-feedback-component'
                >Não foi possivel enviar email</p>}
        </div>
      </div>
    )
  }
}
