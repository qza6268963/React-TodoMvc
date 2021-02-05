import React, { useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/Todo/actions';
import {updateStatusTodo} from '../redux/Todo/actions'


export const TodoItem = ({ id, status, name }) => {
  const [editText, setEditText] = useState(name)
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()
  const handleCheckTodo = () => {
    dispatch(updateStatusTodo(id))
  }
  const handleEdit = () => {
    setEditing(true)
  }
  const handleChangeName = (event) => {
    setEditText(event.target.value)
  }
  const handleSubmit = () => {
    setEditing(false)
  }
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    } else if (event.key === 'Escape') {
      setEditText(name)
      handleSubmit()
    }
  }
  const onDestroy = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <li className={classNames({
      completed: status,
      editing: editing,
    })}>
      <div className='view'>
        <input onChange={handleCheckTodo} checked={status} className='toggle' type='checkbox'/>
        <label onDoubleClick={handleEdit}>
          {editText}
        </label>
        <button className='destroy' onClick={onDestroy}/>
      </div>
      <input
        className='edit'
        value={editText}
        onChange={handleChangeName}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    </li>
  )
}
