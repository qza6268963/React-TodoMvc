import React from 'react'
import { TodoItem } from './TodoItem'
import { useSelector,useDispatch } from "react-redux";
import { toggleAllTodo } from '../redux/Todo/actions'
import { useLocation } from 'react-router-dom'

export const TodoItemList = () => {
  const location = useLocation()
  let status = ''
  switch(location.pathname) {
    case '/todo/completed':
      status = 'completed'
    break
    case '/todo/active':
      status = 'active'
    break
    default:
      status = ''
  }
  const todoReducer = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()
  let count = 0
  todoReducer.forEach(v=>{ if(v.completed) count++  })
  const list = todoReducer.filter(v => {
    if(status === 'completed') {return v.completed}
    else if(status === 'active') {return !v.completed}
    else return v
  })
  const toggleAll = (event) =>{
    dispatch(toggleAllTodo(event.target.checked))
  }

  return (
    <section className='main'>
      <input id="toggle-all" className='toggle-all' checked={count === list.length} onChange={toggleAll} type='checkbox' />
      <label htmlFor='toggle-all'></label>
      <ul className='todo-list'>
        {
          list.map((v) =>
            <TodoItem
              key={v.id}
              completed={v.completed}
              name={v.name} id={v.id}
            />,
          )
        }
      </ul>
    </section>
  )
}
