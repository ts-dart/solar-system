import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">

        <Title headline="Missões" />

        { missions.map((mission) => {
          const card = (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />);

          return card;
        })}

      </div>
    );
  }
}

export default Mission;
