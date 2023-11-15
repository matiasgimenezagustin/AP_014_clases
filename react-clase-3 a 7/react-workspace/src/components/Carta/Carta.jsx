import React, { useState } from 'react'
import { IoHeartSharp, IoHeartOutline} from "react-icons/io5";
import { GiHeartTower } from "react-icons/gi";

const Carta = () => {
    const [isLiked, setIsLiked] = useState(false)
    const handleLikeCart = () =>{
        setIsLiked(!isLiked)
    }
  return (
    <div className='producto'>
        <h2>Titulo</h2>
        {
            isLiked 
            ? <button onClick={handleLikeCart}>Dislike <IoHeartSharp/></button>
            : <button  onClick={handleLikeCart}>Like <IoHeartOutline/></button>
        }
        <button>agregar</button>
    </div>
  )
}

export default Carta


/* 
Crear un estado q que se llame showCounter que empieze como false

Si showCounter es verdadero deberemos mostrar sino mostrar el boton agregar *1
<div>
    <button>-</button>
    1
    <button>+</button>
    <button>Cancelar</button>
</div>
-1 Luego crear un boton que diga agregar que al darle click cambie el showCounter a true
*/