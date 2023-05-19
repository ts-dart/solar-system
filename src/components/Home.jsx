import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: ['Aprenda', 'sobre', 'o', 'sistema', 'solar'],
      msgs: [
        ['Desvende', 'o', 'sistema', 'solar'],
        ['Descubra', 'quantas', 'luas', 'Jupiter', 'possui'],
        ['Saiba', 'qual', 'é', 'a', 'distância', 'entre', 'a', 'Terra', 'e', 'o', 'Sol'],
        ['Explorando', 'os', 'planetas', 'do', 'sistema', 'solar'],
        ['Entendendo', 'a', 'gravidade', 'dos', 'corpos', 'celestes'],
        ['Conhecendo', 'os', 'asteroides', 'e', 'os', 'cometas'],
        ['Descobrindo', 'as', 'estrelas', 'mais', 'brilhantes'],
        ['Investigando', 'a', 'vida', 'em', 'outros', 'planetas'],
        ['Explorando', 'os', 'buracos', 'negros', 'do', 'universo'],
        ['Viajando', 'pelas', 'galáxias', 'distantes'],
        ['Explorando', 'os', 'mistérios', 'do', 'cosmos']
      ]
    };
  }

  componentDidMount() {
    this.handleMessage();
  }

  handleMessage() {
    setInterval(() => {
      const i = Math.floor(Math.random() * this.state.msgs.length);
      const choicedMsg = this.state.msgs[i];
      let updatedMsg = [];
  
      choicedMsg.forEach((word, index) => {
        setTimeout(() => {
          updatedMsg = [...updatedMsg, word];
          this.setState({ msg: updatedMsg });
        }, 100 + index * 100);
      });
    }, 5000);
  }

  render() {
    const { msg } = this.state;

    return (
      <div id='div-home-content'>
        <div id='div-h1-home-animation'>
          <h1>Bem vindo ao SolarSystem.</h1>
          {msg.map((word, index) => (
            <h1
              key={index}
              style={{
                color: '#9d9488',
                animation: `reveal ${1}s`
              }}
            >
              {word}
            </h1>
          ))}
        </div>
        <div id='div-p-presentation'>
          <p>Este e o projeto de sistema solar desenvolvido para o meu portfolio.</p>
          <Link to='/solarsystem'>
            <button>Explore o sistema solar</button>
          </Link>
        </div>
      </div>
    );
  }
}
