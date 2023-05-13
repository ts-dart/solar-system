import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import stars from '../data/stars';
import StarData from './StarData';

export default class SolarSystem extends React.Component {
  constructor() {
    super();
    this.state = {
      pasObjectName: 'Passe o mouse sobre um dos círculos',
      textButtonVel: 'Diminuir velocidade',
      slower: false,
      showStarData: false,
      selectedStar: 0,
    };
  }

  handleShowStarData(bool) {
    if (bool) this.setState({ showStarData: true });
    else if (!bool) this.setState({ showStarData: false });
  }

  handleSpeedSystem() {
    if (this.state.slower) {
      stars.forEach((o, i) => {
        if (i > 0) {
          (o.orbitDuration = `${Number(o.orbitDuration.split('s')[0])-20}s`);
          this.setState({
            slower: false,
            textButtonVel: 'Diminuir velocidade',
          });
        }
      });
    } else {
      stars.forEach((o, i) => {
        if (i > 0) {
          (o.orbitDuration = `${Number(o.orbitDuration.split('s')[0])+20}s`)
          this.setState({
            slower: true,
            textButtonVel: 'Aumentar velocidade',
          });
        }
      });
    }
  }

  render() {
    return (
      <>
        <div id="solar-system">
          <div id='painel'>
            <div id="show-object-name">
              {this.state.pasObjectName}
            </div>
            <button
              id='btn-control-speed'
              onClick={() => this.handleSpeedSystem()}
            >{this.state.textButtonVel}</button>
          </div>
          <div id="sol"
            onMouseEnter={() => {
              this.setState({ 
                pasObjectName: 'Clique no círculo para obter mais informações sobre: Sol' 
              })
            }}
            onMouseOut={() => {
              this.setState({ 
                pasObjectName: 'Passe o mouse sobre um dos círculos' 
              })
            }}
            onClick={() => {
              this.handleShowStarData(true);
              this.setState({ selectedStar: 0 })
            }}
          ></div>
          {stars.map((star, index) => (
            index > 0 
              ? <div
                  key={index}
                  className={`planeta ${star.nameClass.toLowerCase()}`}
                  style={{
                    width: star.size,
                    height: star.size,
                    animationDuration: star.orbitDuration,
                  }}
                  onMouseEnter={() => {
                    this.setState({ 
                      pasObjectName: `Clique no círculo para obter mais informações sobre: ${star.name}` 
                    });
                  }}
                  onMouseOut={() => {
                    this.setState({ 
                      pasObjectName: 'Passe o mouse sobre um dos círculos' 
                    });
                  }}
                  onClick={() => {
                    this.handleShowStarData(true);
                    this.setState({ selectedStar: index });
                  }}
                ></div>
              : null    
          ))}
          {this.state.showStarData 
            ? <StarData
                name={stars[this.state.selectedStar].name}
                handleShowStarData={(bool) => this.handleShowStarData(bool)}
              />
            : null }
        </div>
      </>
    );
  }
}
