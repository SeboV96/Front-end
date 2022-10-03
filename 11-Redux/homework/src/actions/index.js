const {INCREMENTO, DECREMENTO} = require('.../action-types')

// Nuestras actions (action creators) devolverán un paquete de actions que nuestro reducer recibirá. 
// ¿Cómo es el paquete de acción? Tengan en cuenta que el creador de la acción no es en absoluto responsable 
// de manejar ninguna de las lógicas actuales de actualización del store central de Redux.
// Eso se lo deja al reducer(s).

export const increment = (valor) => {
  // Completa la funcion
  return {
    type: INCREMENTO,
    payload: valor //'payload' suele tener datos para la modificacion del estado
  }
};

export const decrement = () => {
  // Completa la funcion
  return {
    type: DECREMENTO,
    payload: 1 //'payload' suele tener datos para la modificacion del estado
  } 
};


