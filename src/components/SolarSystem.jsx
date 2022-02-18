import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">

        <Title headline="Planetas" />

        { planets.map((planet) => {
          const card = (<PlanetCard
            key={ planet.name }
            planetName={ planet.name }
            planetImage={ planet.image }
          />);

          return card;
        })}

      </div>
    );
  }
}

export default SolarSystem;
