import React, { Component } from 'react';
import Header from '../components/Header';
import SolarSystem from '../components/SolarSystem';
import Missions from '../components/Missions';

export default class Home extends Component {
  constructor() {
    super();
    this.state = { urlImage: '' };
  }

  async componentDidMount() {
    // const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DfGAgSgjHyOLIH1UQFY36tUt14IWtsVr1N4pxJz7');
    const data = await response.json();

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ urlImage: data.url });
  }

  componentDidUpdate() {
    console.log('rodou update');
    const { urlImage } = this.state;
    // document.body.style.backgroundImage = `url(${urlImage})`;
  }

  render() {
    return (
      <>
        <Header />
        <main>
          <SolarSystem />
          {/* <Missions /> */}
        </main>
      </>
    );
  }
}
