import React from 'react'

const Main = ({persona}) => {
    const { nombre,apellido,lenguajes,datos} = persona
  return (
    <div>
       <p>otro pt</p> <p>Hola soy {nombre} {apellido} estudiante de programacion de la facultad regional y se programar con lenguajes : {lenguajes} y tambien puedo hacer {datos}</p>
    </div>
  )
}

export default Main