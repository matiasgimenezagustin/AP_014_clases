import React, { useState } from 'react'
import { IoHeartSharp, IoHeartOutline } from "react-icons/io5";
import { GiHeartTower } from "react-icons/gi";

const Carta = () => {
    const [isLiked, setIsLiked] = useState(false)
    const [showCounter, setShowCounter] = useState(false)
    const [counter, setCounter] = useState(1)
    const handleLikeCart = () => {
        setIsLiked(!isLiked)
    }
    const handleUserAdd = () =>{
        setShowCounter(true)
    }
    const handleUserDelete = () =>{
        setShowCounter(false)
    }

    const handleAddCart = () =>{
        setCounter(counter + 1)
    }
    const handleDeleteCart = () =>{
        if(counter !== 1){
            setCounter(counter - 1)
        }
        else{
            setShowCounter(false)
        }
        
    }


    return (
        <div className='producto'>
            <h2>Titulo</h2>
            {
                isLiked
                    ? <button onClick={handleLikeCart}>Dislike <IoHeartSharp /></button>
                    : <button onClick={handleLikeCart}>Like <IoHeartOutline /></button>
            }
            {
                showCounter
                    ? (
                        <div>
                            <button onClick={handleDeleteCart}>-</button>
                            {counter}
                            <button onClick={handleAddCart}>+</button>
                            <button onClick={handleUserDelete}>Cancelar</button>
                        </div>
                    )
                    : <button onClick={handleUserAdd}>Agregar</button>
        }
        </div>
    )
}

export default Carta


/* 
Crear un estado q que se llame showCounter que empieze como false

Si showCounter es verdadero deberemos mostrar el contador sino mostrar el boton agregar *1

EL CONTADOR:
<div>
    <button>-</button>
    1
    <button>+</button>
    <button>Cancelar</button>
</div>
EL BOTON DE AGREGAR:
-1 Luego crear un boton que diga agregar que al darle click cambie el showCounter a true
*/