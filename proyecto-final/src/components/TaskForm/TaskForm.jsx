import React, { useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import './TaskForm.css'
import { v4 as uuidv4 } from 'uuid';

const TaskForm = ({addTask}) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    const handleSubmitTask = (e) =>{
        e.preventDefault()
        const title = e.target.title.value
        const description = e.target.description.value
        const newTask = {
            title,
            description,
            id: uuidv4(),
            createdAt: new Date().toLocaleString()
        }
        addTask(newTask)
        closeModal()
    }

    return (
        <div>

            <button onClick={openModal}>Nueva tarea <CiSquarePlus /></button>
            {isOpen && (
                <div className='modal-background' >
                    <div className='modal'>
                        <h2>Crea una nueva tarea</h2>
                        <form onSubmit={handleSubmitTask}>
                            <div className="input-container">
                                <label htmlFor="title">Ingrese un titulo:</label>
                                <input type="text" id='title' name='title' placeholder='Titulo ejemplo' />
                            </div>
                            <div className="input-container">
                                <label htmlFor="description">Ingrese una descripcion:</label>
                                <textarea name="description" id="description" ></textarea>
                            </div>
                            <div className='controls-form'>
                                <button role='button' type='button' onClick={closeModal}>Cancelar</button>
                                <button type='submit'>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

export default TaskForm

