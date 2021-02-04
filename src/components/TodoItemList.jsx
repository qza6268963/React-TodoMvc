import React from 'react'
import { TodoItem } from './TodoItem'
export const TodoItemList = ({ list }) => {

  return (
    <section className='main'>
      <input className='toggle-all' type='checkbox'></input>
      <label htmlFor='toggle-all'></label>
      <ul className='todo-list'>
        {
          list.map((v) =>
            <TodoItem
              key={v.id}
              status={v.status}
              name={v.name} id={v.id}
            />,
          )
        }
      </ul>
    </section>
  )
}
