import React from "react"
import './Product.css'

const Product = ({nombre, precio, comprar, estaComprado, esFavorito}) =>{
    nombre = nombre  ? nombre : 'Error 404'
    precio = precio ? precio : '0'
    precio = Number(precio).toFixed(2)
    let iva = (precio * 0.21).toFixed(2)

  /* Declaramos la funcion comprar */
    


    return(
      <div className='producto'>
        <h2 onMouseOver={() => console.log('pasaste por encima')}>{nombre}</h2>
        <span>Precio: ${precio}</span>
        <span>Iva: ${iva}</span>
        {
            estaComprado
            ?<button className='btn btn-bought'>Comprado</button>
            :<button className='btn btn-buy' onClick={comprar} >Comprar</button>
        }
        {
            esFavorito
            ? <button>Dislike</button>
            : <button>Like</button>
        }
        
        
      </div>
    )
  }

export default Product