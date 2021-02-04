import React, { useState } from 'react'
import classNames from 'classnames'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/Todo/actions';


export const TodoItem = ({ id, status, name }) => {
  const [checkState, setCheckState] = useState(status)
  const [editText, setEditText] = useState(name)
  const [editing, setEditing] = useState(false)
  const dispatch = useDispatch()
  const handleCheckTodo = () => {
    setCheckState(!checkState)
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
      setEditing(false)
    }
  }
  const onDestroy = () => {
    dispatch(deleteTodo(id))
  }
  return (
    <li className={classNames({
      completed: checkState,
      editing: editing,
    })}>
      <div className='view'>
        <input onChange={handleCheckTodo} checked={checkState} className='toggle' type='checkbox'/>
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
