import React from 'react'
import './index.css'
import { Product, Header } from './components'


function App() {
  
  const saludar = () => 'hola'
  let nombre = 'jacinto'

  return (  
    <div>
      <Header/>
      <div className='product-container'>
        
        <Product nombre='tv samsung 40"' precio={450} estaComprado={true} esFavorito={false}/>
        <Product estaComprado={false} esFavorito={true}/>
      </div>
    </div>
    
  ) 
}

export default App



/* 
Alumnos mayor => class
22312 => codigo de la clase (id)

*/


/* Debemos crear una carta que muestre un nombre un dni y debe ser de 200 w x 100 h y un fondo de color celeste*/