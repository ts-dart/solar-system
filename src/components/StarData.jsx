import React from 'react';

export default class StarData extends React.Component {
  render() {
    const {
      handleShowStarData,
      name
    } = this.props;

    return(
      <div id="star-data-content">
        <button onClick={() => handleShowStarData(false)}>x</button>
        {name}
      </div>
    );
  }
}
