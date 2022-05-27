import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDoListItem from './ToDoListItem'

function ToDoList () {
  const [toDos, setToDos] = useState([])

  const addToDo = (toDo) => {
    if (!toDo.text || /^\s*$/.test(toDo.test)) {
      return
    }
    const newToDos = [toDo, ...toDos]

    setToDos(newToDos)
  }

  const updateToDo = (toDoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setToDos((prev) =>
      prev.map((item) => (item.id === toDoId ? newValue : item))
    )
  }

  const removeToDo = (id) => {
    const removeArr = [...toDos].filter((toDo) => toDo.id !== id)
    setToDos(removeArr)
  }

  return (
    <div>
      <h1> THINGS TO DO </h1>
      <ToDoForm onSubmit={addToDo} />
      <ToDoListItem toDos={toDos} removeToDo={removeToDo} updateToDo={updateToDo} />
    </div>
  )
}

export default ToDoList
