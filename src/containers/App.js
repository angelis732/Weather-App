import React, { useState } from 'react';
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import Ciudad from '../components/Ciudad.jsx';
import About from '../components/About.jsx';
import SearchBar from "../components/SearchBar";


const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  //const [error, setError] = useState("");
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(city => city.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(response => response.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const resultadoCiudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          const cityFound = cities.find(city => city.id === resultadoCiudad.id);
          if(!cityFound) {
            setCities(oldCities => [...oldCities, resultadoCiudad]);
          }else{
            alert('Esta ciudad ya se esta mostrando')
          }
        } else {
           if(ciudad){
             return  alert("Ciudad no encontrada");
           }
           alert("Debe ingresar una ciudad");
        }
      })
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(city => city.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    
    <div className="App">
      <Route
        path='/'
        component={Nav}
      />
  
      <Route
        exact path='/'
        render={() => <SearchBar onSearch={onSearch}/>}
      />
   
       <Route
          exact path='/about'
          component={About}
       />
       
       <Route
        exact path='/'
        render={() => <Cards
          cities={cities}
          onClose={onClose} />}
      />

      <Route
        path='/ciudad/:ciudadId'
        render={({match}) =>
           <Ciudad
          match={match}
          city={onFilter(match.params.ciudadId)}/>}
      />
    </div>
  );
}

export default App;

