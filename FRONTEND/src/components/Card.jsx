import React, { useState } from 'react'

const Card = () => {
    const [respuesta, setRespuesta] = useState('');
    const [mensaje, setMensaje] = useState('Escribí la respuesta correcta para completar la tarea');
    const [bloqueo, setBloqueo] = useState(false);
    const [intentos, setIntentos] = useState(0);
    const [resultado, setResultado] = useState('inicial');
    
    const validarRespuesta = (respuesta) => {
        if(intentos < 2) {
            if(respuesta === 'let x = 10;') {
                setMensaje('Respuesta correcta!');
                setResultado('correcto');
                setBloqueo(true);
            } else {
                setMensaje('Respuesta incorrecta, volvé a intentarlo');
                setIntentos(intentos + 1);
            }
        } else {
            setMensaje('La respuesta correcta es let x = 10;');
            setBloqueo(true);
            setResultado('incorrecto');
        }
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        validarRespuesta(respuesta);
        console.log(intentos);
    }

  return (
    <>
        <div className={resultado}>
            <h2>Declarar una variable <b>x</b> con valor <b>10</b></h2>
            <form className='respuesta' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                />
                <button type='submit' disabled={bloqueo}>Verificar</button>
            </form>
            <p>{mensaje}</p>
        </div>
    </>
  )
}

export default Card

