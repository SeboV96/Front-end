import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';

export default function App() {
// Espacio para codigo
// Estado para mantener un arreglo de ciudades
const [ciudades, setCiudades] = useState([]);
const apiKey=  '4ae2636d8dfbdc3044bede63951a019b'
function onSearch(ciudad) {
  //Acá habría que hacer el llamado a la API para obtener los datos de la ciudad
  //pero de momento agregaremos una ciudad por default para ver que funcione

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
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
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }
    function onClose(id){
      setCiudades(oldCities => oldCities.filter(el => el.id !== id))
    }
  return (
    <div className="App">
      { /* Tu código acá: */ }
      <Nav onSearch={onSearch}/>
        <Cards cities={ciudades} onClose={onClose}/>     
    </div>
  );
}


