import React, { useState } from "react";


function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [contenido, setContenido] = useState('');
  const [contenido1, setContenido1] = useState('');
  const [contenido2, setContenido2] = useState('');
  const [contenido3, setContenido3] = useState('');
  

  const handleSubmit = (event) => {
    event.preventDefault();
    setContenido(`Nombre: ${nombre}`);
    setContenido1(`Apellido: ${apellido}`);
    setContenido2(`Email: ${email  }`);       
    setContenido3(`Contraseña: ${contraseña}`);
   
  };

  return (
      
   
      <div className='text-center'>
        <h3>3️⃣-Crea un formulario con cuatro campos y 
          muestra el valor de los campos cuando se Enviar
          el formulario
        </h3>
          <form onSubmit={handleSubmit}>

          

          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
              required
            />
          </label>

 
         
          <label>
            Apellido:
            <input
              type="text"
              value={apellido}
              onChange={(event) => setApellido(event.target.value)}
              required
            />
          </label>
      
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        
          <label>
            Contraseña:
            <input 
              type="password"
              value={contraseña}
              onChange={(event) => setContraseña(event.target.value)}
              required
            />
          </label>

          <br />
          <br />
          <button className="btn btn-success" type="submit">Enviar</button>
         
          </form>
          {contenido && <p>{contenido}</p>}
          {contenido1 && <p>{contenido1}</p>}
          {contenido2 && <p>{contenido2}</p>}
          {contenido3 && <p>{contenido3}</p>}
    
      </div>
      
 
   
    
  );
}

export default Formulario;