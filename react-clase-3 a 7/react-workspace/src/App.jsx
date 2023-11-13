import React from 'react'
import './index.css'
import { Product, Header } from './components'


function App() {
  
  const saludar = () => 'hola'
  let nombre = 'jacinto'
  const comprar = () =>{
    alert('comprado')
  }

  const archivos = [
    {
      nombre: 'hola',
      extension: 'txt',
      peso: '2kb',
      fechaDeCreacion: '2022/03/08',
      tipo: 'archivo'
    },
    {
      nombre: 'index',
      extension: 'html',
      peso: '50kb',
      fechaDeCreacion: '2023/04/01',
      tipo: 'archivo'
    },
  ]
  return (  
    <div>
      <Header/>
      <div className='product-container'>
        
        <Product nombre='tv samsung 40"' precio={450} estaComprado={true} esFavorito={false} comprar={comprar}/>
        <Product estaComprado={false} esFavorito={true} comprar={comprar}/>


      </div>
      <div>
        {
          archivos.map(
            (archivo) =>(
              <div className='item'>
                <h2>{archivo.nombre + '.' + archivo.extension}</h2>
                <span>Peso: {archivo.peso}</span>
                <span>Fecha de creacion: {archivo.fechaDeCreacion}</span>
                <hr/>
              </div>
            )
          )
        }
      </div>
    </div>
    
  ) 
}

export default App

/* Principio DRY dont repeat yourself */

/* 
Alumnos mayor => class
22312 => codigo de la clase (id)

*/


/* Debemos crear una carta que muestre un nombre un dni y debe ser de 200 w x 100 h y un fondo de color celeste*/



/* 
Estructura a reperir
<div className='item'>
          <h2>Hola.txt</h2>
          <span>Peso: 3kb</span>
          <span>Fecha de creacion: 2023/08/09</span>
          <hr/>
        </div>
*/


/* 
Vamos a crear un array que sea representativo de una lista de cosas para hacer el finde que viene

estructura: 


nombre de la tarea

descripcion de la tarea

tiempo estimado

finalizar antes de:

fecha de creacion


Luego de esto mapear a dicha lista de tareas para representarlas en la pagina
*/