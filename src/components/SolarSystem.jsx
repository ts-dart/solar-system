import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
//import planets from '../data/planets';

const planets = [
  { name: 'Mercurio', size: 3, orbitDuration: '4s' },
  { name: 'Venus', size: 7, orbitDuration: '6s' },
  { name: 'Terra', size: 9, orbitDuration: '8s' },
  { name: 'Marte', size: 8, orbitDuration: '10s' },
  { name: 'Jupiter', size: 15, orbitDuration: '12s' },
  { name: 'Saturno', size: 13, orbitDuration: '14s' },
  { name: 'Urano', size: 12, orbitDuration: '16s' },
  { name: 'Netuno', size: 11, orbitDuration: '18s' },
];

class SolarSystem extends React.Component {
  render() {
    return (
      <div id="solar-system">
        <div id="sol"></div>
        {planets.map((planet, index) => (
          <div
            key={index}
            className={`planeta ${planet.name.toLowerCase()}`}
            style={{
              width: planet.size,
              height: planet.size,
              animationDuration: planet.orbitDuration,
            }}
          ></div>
        ))}
      </div>
    );
  }
}

export default SolarSystem;
