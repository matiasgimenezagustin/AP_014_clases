import React from 'react'

function App() {
  
  const saludar = () => 'hola'
  let nombre = 'jacinto'

  return (  
    <div>
      <h1>{saludar() + ' ' + nombre}</h1>
      <span className='resultado'>El resultado de 1 + 1 es {1 + 1} {saludar()} </span>
      <label htmlFor=""></label>
      <div style={{width: '300px', height: '300px', backgroundColor: 'red', border: '10px solid blue'}}></div>
    </div>
  )
}

export default App

/* 
Alumnos mayor => class
22312 => codigo de la clase (id)

*/
