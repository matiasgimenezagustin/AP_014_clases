import React from 'react'

const TaskItem = ({task, deleteTask}) => {
    const {title, description, createdAt, id} = task
  return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{createdAt}</span>
        <button onClick={() => deleteTask(task.id)}>Finalizar</button>
        <hr/>
    </div>
  )
}

export default TaskItem