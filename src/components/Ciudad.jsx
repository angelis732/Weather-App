import React from "react";
import {Link} from "react-router-dom";

class Ciudad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ciudad: {}
    }
  }
  componentDidMount(){
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    const id = this.props.match.params.ciudadId;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        this.setState({
          ciudad: recurso
        })
      })
  }

  render(){
    const city = this.state.ciudad;
    if(!city.main) return <h1>Cargando...</h1>
    return (
      <div className='container' style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
      
      <div className="card" style={{textAlign: 'center', marginTop: '5%', alignSelf: 'center'}}>
        <h5 className="card-header card-title">{city.name}</h5>
        <div className="card-body">
          <div className="card-text" style={{width: '90%', textAlign: 'justify', marginLeft: '5%'}}>
            <div><strong>Temperatura:</strong> {city.main.temp} ºC</div>
            <div><strong>Clima:</strong> {city.weather[0].main}</div>
            <div><strong>Viento:</strong> {city.wind.speed} km/h</div>
            <div><strong>Cantidad de nubes:</strong> {city.clouds.all}</div>
            <div><strong>Latitud:</strong> {city.coord.lat}º</div>
            <div><strong>Longitud:</strong> {city.coord.lon}º</div>
          </div>
          <div style={{textAlign: 'left', marginTop: '10%'}}>
            <Link to={`/`} className="card-link">Volver</Link>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Ciudad;








