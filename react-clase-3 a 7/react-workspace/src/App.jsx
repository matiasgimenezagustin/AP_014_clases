import React, {useState} from 'react'
import './index.css'
import { Product, Header, Carta } from './components'

function App() {
  /* Solo se ejecuta en la primera carga del componente */
  const [nombre, setNombre] = useState('jacinto')
  
  const saludar = () => 'hola'
 
  const comprar = () =>{
    alert('comprado')
  }

  const handleChangeName = () => {
    setNombre('pepe')
    
  }

  const archivos = [
    {
      nombre: 'hola',
      extension: 'txt',
      peso: '2kb',
      fechaDeCreacion: '2022/03/08',
      tipo: 'archivo',
      id: 0
    },
    {
      nombre: 'index',
      extension: 'html',
      peso: '50kb',
      fechaDeCreacion: '2023/04/01',
      tipo: 'archivo',
      id: 1
    },
  ]
  const [mostrar, setMostrar] = useState(true)
  const handleChangeVisibility = () =>{
    setMostrar(!mostrar)
  }
  return (  
    <div>
      <Header/>
      <div className='product-container'>
        
        <Product nombre='tv samsung 40"' precio={450} estaComprado={true} esFavorito={false} comprar={comprar}/>
        <Product estaComprado={false}  esFavorito={true} comprar={comprar} nombre={'pepe'}/>


      </div>
      <div>
        {
          archivos.map(
            (archivo) =>(
              <Item {...archivo} key={archivo.id + archivo.nombre}/>
            )
          )
        }
      </div>
      <h1>{nombre}</h1>
      <button onClick={handleChangeName}>Cambiar nombre</button>

      {mostrar && <div className='box'></div>}
      <button onClick={handleChangeVisibility}>{mostrar ? 'ocultar': 'mostrar'}</button>

      <Carta/>
      <Carta/>
    </div>
    
  ) 
}

export default App


const Item = ({nombre, extension, fechaDeCreacion, peso}) => {
  return (
    <div className='item'>
      <h2>{nombre + '.' + extension}</h2>
      <span>Peso: {peso}</span>
      <span>Fecha de creacion: {fechaDeCreacion}</span>
      <hr />
  </div>
  )
}

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