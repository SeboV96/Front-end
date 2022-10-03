import React from 'react';
import Card from './Card'

export default function Cards({cities}) {
  // acá va tu código
  // tip, podés usar un map
  
  return (
  <div>
    {cities && cities.length > 0 ? cities.map(
      (ciudad, index) => {
      return (
      <Card
      key={ciudad.id} 
      max={ciudad.main.temp_max} 
      min={ciudad.main.temp_min} 
      name={ciudad.name} 
      img={ciudad.weather[0].icon} 
      onClose={() => alert(ciudad.name)} 
      />
      )
    }) : (
    <h1>No cuidades para mostrar </h1>
  )}
  </div>
  );
};


//OPERADOR TERNARIO ----> CONDICION ? SI ES TRUE HACE ESTO : SI ES FALSE HACE ESTO OTRO

// cities.length > 0 ? cities.map(...) : 