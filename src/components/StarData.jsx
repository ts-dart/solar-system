import React from 'react';

export default class StarData extends React.Component {
  render() {
    const {
      handleShowStarDataComponent,
      name,
      images,
      type,
      resume,
      features,
      geography,
    } = this.props;

    return(
      <div id="star-data-content-container">
        <button
          id='button-close-star-data-content'
          onClick={() => handleShowStarDataComponent(false)}
        >
          x
        </button>
        <div id='data-content'>
          <div id='div-object-name-star-data-content'>
            <h1>{name}</h1>
          </div>
          <div id='div-object-resume-star-data-content'>
            <p>{resume}</p>
          </div>  
          <div id='div-object-features-star-data-content'>
            <div id='div-object-type-star-data-content' className='div-in-row'>
              <p>Tipo:</p>
              <p>{type}</p>
            </div>
            <div id='div-object-orbital-period-star-data-content' className='div-in-row'>
              <p>Período orbital:</p>
              {features.orbitalPeriod.map((t, i) => <p key={i}>{t}</p>)}
            </div>
            <div id='div-object-orital-speed-star-data-content' className='div-in-row'>
              <p>Velocidade orbital:</p>
              <p>{features.orbitalSpeed}</p>
            </div>
            <div id='div-object-rotation-duration-star-data-content' className='div-in-row'>
              <p>Duração da rotação:</p>
              <p>{features.rotationDuration}</p>
            </div>
            <div id='div-object-radius-star-data-content' className='div-in-row'>
              <p>Raio:</p>
              <p>{features.radius}</p>
            </div>
            <div id='div-object-diameter-star-data-content' className='div-in-row'>
              <p>Diâmetro:</p>
              <p>{features.Diameter}</p>
            </div>
            <div id='div-object-sun-distance-star-data-content' className='div-in-row'>
              <p>Distância do sol:</p>
              <p>{features.sunDistance}</p>
            </div>
            <div id='div-object-one-way-light-to-sun-star-data-content' className='div-in-row'>
              <p>Voo de ida para o sol:</p>
              <p>{features.oneWayLightToTheSun}</p>
            </div>
            <div id='div-object-satellites-star-data-content'>
              <div id='div-object-satellites-number-star-data-content' className='div-in-row'>
                <p>Número de satélites:</p>
                <p>{features.satellites.number}</p>
              </div>
              <div id='div-object-satellites-names-star-data-content' className='div-in-row'>
                <p>Nomes dos satélites:</p>
                {features.satellites.names.map((t, i) => (
                  i < features.satellites.names.length-1
                    ? <p key={i}>{t+','}</p>
                    : <p key={i}>{t}</p>
                ))}
              </div>
            </div>
            <div id='div-object-temperature-star-data-content' className='div-in-row'>
              <p>Temperatura:</p>
              <p>{features.temperature}</p>
            </div>
            <div id='div-object-gravity-star-data-content' className='div-in-row'>
              <p>Gravidade:</p>
              <p>{features.gravity}</p>
            </div>
            <div id='div-object-geography-star-data-content' className='div-in-row'>
              <p>Geografia:</p>
              <p>{geography}</p>
            </div>
          </div>
          <div id='div-object-images-star-data-content'>
            <p>Imagens:</p>
            {images.map((image, i) => <img key={i} src={image} alt={`imagem do(a) ${name}`}/>)}
          </div>
        </div>
      </div>
    );
  }
}
