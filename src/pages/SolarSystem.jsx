import React from 'react';
import SolarSystem from '../components/SolarSystem';
import Header from '../components/Header';

export default class extends React.Component {
  render() {
    return (
      <>
        <Header title='\ Sistema Solar'/>
        <main>
          <SolarSystem />
        </main>
      </>
    );
  }
}