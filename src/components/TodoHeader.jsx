import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/Todo/actions";

export const TodoHeader = () => {
  const dispatch = useDispatch()
  const [newTodo,setNewTodo] = useState('')

  const onChange = (event) =>{
    setNewTodo(event.target.value)
  }

  const handleNewTodoKeyDown = (event) =>{
    if (event.key !== 'Enter') {
      return
    }
    event.preventDefault()
    var val = newTodo.trim()

    if (val) {
      dispatch(addTodo(newTodo))
      setNewTodo('')
    }
  }

  return (
    <header className='header'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        onKeyDown={handleNewTodoKeyDown}
        onChange={onChange}
        value={newTodo}
      />
    </header>
  )
}
