import React, { useState } from 'react';
import './style.css';


// Ejercicio numero 1
var Contador = () => {
  // Creamos el estado inicial del contador con useState
  var [contadora, setContador] = useState(0);

  // Función para incrementar el contador
  var incrementarCont = () => {
    setContador(contadora + 1 );
  }

  // Función para decrementar el contador
  var decrementarCont = () => {
    setContador(contadora - 1);
  }

  return (
    
    <div className='text-center'>
      <h3>1️⃣-Cree un contador que pueda ser incrementado y decrementar</h3>
      <h1 className='btn btn-warning'>Contador: {contadora}</h1>
      <br></br>
      <button className='btn btn-outline-dark' onClick={incrementarCont}>➕</button>
      <button className='btn btn-outline-dark' onClick={decrementarCont}>➖</button>
          
    </div>

    
  );

  
}

export default Contador;










 




