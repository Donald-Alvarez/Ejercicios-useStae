import React, { useState } from "react";


function TodoList() {
  const [tarea, setTarea] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTarea([...tarea, nuevaTarea]);
    setNuevaTarea("");
  };
  const handleChange = (event) => {
    setNuevaTarea(event.target.value);
  };

  const handleDelete = (index) => {
    const nuevaTarea = [...tarea];
    nuevaTarea.splice(index, 1);
    setTarea(nuevaTarea);
  };

  return (
    <div className="text-center">
        <h3>4️⃣-Crea una aplicacion donde se pueda agregar y eliminar tareas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={handleChange}
          required
        />
        <button className='btn btn-outline-success' type="submit" >Añadir Tarea✅</button>
      </form>
      <ul>
        {tarea.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <br/>
            <button className="btn btn-outline-danger" onClick={() => handleDelete(index)}>✖️</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;