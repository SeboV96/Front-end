import React from 'react';
import Style from './Card.module.css'

export default function Card(props) {
  // acá va tu código
  return (
  <div className={Style.container}>
    <h1 className='titulo'> {props.name} </h1>
    <div className={Style.info}>
       <h3> Min {props.min} </h3>
       <h3> Max {props.max} </h3>
       <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
       alt='img clima' />
       </div>
       <button id={Style.close} onClick={props.onClose}>{' '} X {' '}</button>
  </div>
  );
};