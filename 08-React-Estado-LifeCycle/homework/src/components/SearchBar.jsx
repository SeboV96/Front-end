import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  //estado para guardar lo que se escribe
  const [texto, setTexto] = useState('') 
  //en tiempo real vamos a tomar el valor del input
  const handleChange = (evento) => {

  }
  //en el submit, vamos a enviarle a onSearch lo que haya escrito en el input
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch("Cairns");
    }}>
      <input
        type="text"
        placeholder="Search your city..."
        onChange={(evento) => handleChange(evento)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
