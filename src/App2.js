import React, { useState } from 'react';


function ListaDeElementos() {
  const [elementos, setElementos] = useState([]);
  const [nuevoElemento, setNuevoElemento] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoElemento.trim() !== '') {
      setElementos([...elementos, nuevoElemento]);
      setNuevoElemento('');
  
    }
  };

  const handleChange = (event) => {
    setNuevoElemento(event.target.value);
  };

  return (
    <div className='text-center'>
     <h3>2️⃣-Crea una lista de elementos que se puedan agregar a traves de un formulario</h3>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          placeholder="Nombre"
          value={nuevoElemento}
          onChange={handleChange}
        />
        
        <button className='btn btn-outline-primary' type="submit">Agregar✅</button>
      </form>
      <ul>
        {elementos.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeElementos;




