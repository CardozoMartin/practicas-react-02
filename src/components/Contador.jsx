import React, { useState } from 'react'

const Contador = () => {
    //usestate consta de dos partes la primera es la variable de cambio y el segundo es la funcion que cambia la variable de estado
    const [contador, setContador] = useState(0)
    const [mostrar, setMostrar] = useState(false)
    let suma = 0

    //para manejar el aumento de la variable de estado
    const aumentar = () => {
        setContador(contador + 1)
    }
    //se utiliza para mermar la variable de estado
    const mermar = () => {
        setContador(contador - 1)
    }

    const handleMostrar = () => {
        setMostrar(true)
    }
    const handleOcultar = () => {
        setMostrar(false)
    }
    return (
        <div>{contador}
            <br />
            <button onClick={aumentar}>Sumar</button><button onClick={mermar}>Restar</button>
            <br /><br /><br />

            <button onClick={handleMostrar}>Mostrar Mensajes</button>
            {
                mostrar && <div>
                    <h3>Hola soy un mensaje para mostrar</h3>
                    <button onClick={handleOcultar}>ocultar</button>
                </div>
            }

        </div>

    )
}

export default Contador