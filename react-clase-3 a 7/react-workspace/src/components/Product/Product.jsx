import React from "react"
import './Product.css'

const Product = (propiedades) =>{
    let nombre = propiedades.nombre  ? propiedades.nombre : 'Error 404'
    let precio = propiedades.precio ? propiedades.precio : '0'
    precio = Number(precio).toFixed(2)
    let iva = (precio * 0.21).toFixed(2)
    return(
      <div className='producto'>
        <h2>{nombre}</h2>
        <span>Precio: ${precio}</span>
        <span>Iva: ${iva}</span>
        {
            propiedades.estaComprado
            ?<button className='btn btn-bought'>Comprado</button>
            :<button className='btn btn-buy'>Comprar</button>
        }
        {
            propiedades.esFavorito
            ? <button>Dislike</button>
            : <button>Like</button>
        }
        
        
      </div>
    )
  }

export default Product