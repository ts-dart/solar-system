import React from 'react';
import SolarSystemComponent from '../components/SolarSystem';
import Header from '../components/Header';

export default class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <Header title='\ Sistema Solar'/>
        <main>
          <SolarSystemComponent />
        </main>
      </>
    );
  }
}