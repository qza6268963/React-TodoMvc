import React from 'react'
import { TodoItem } from './TodoItem'
import { useSelector,useDispatch } from "react-redux";
import { toggleAllTodo } from '../redux/Todo/actions'

export const TodoItemList = () => {
  const list = useSelector((state) => state.todoReducer)
  const dispatch = useDispatch()
  let count = 0
  list.forEach(v=>{ if(v.completed) count++  })

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
