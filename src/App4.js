import { useState } from 'react';
import './style.css';

function Ocultar() {
    const [showMore, setShowMore] = useState(true);

    var description= <h4 id='texto' className='text-center'>
    Diabetes Mellitus es una enfermedad metabólica
    crónica caracterizada por la glucosa en sangre elevada 
    (hiperglucemia).
    Se asocia con una deficiencia absoluta o relativa de la producción y/o
    de la acción de la insulina.
    </h4>
   
  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <>
        <h3 className='text-center'>5️⃣-Crea una funcion que te permita 
        ocultar el contenido de un texto.</h3>
        <div className='text-center'>
        <button className='btn btn-outline-primary' onClick={handleMoreClick}>
        {showMore ? '🔼 Ocultar' : '🔽 Mostrar'} detalles
        </button>
        </div>
     
      {showMore && <p>{description}</p>}
    </>
  );
}

export default Ocultar;
