import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { clearCompletedTodo } from '../redux/Todo/actions'

export const TodoFooter = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todoReducer)
  let unCompleted = 0
  let completed = 0
  list.forEach(v => { 
    if(!v.status) unCompleted++
    if(v.status) completed++
})
  const onClearCompleted = () => {
    dispatch(clearCompletedTodo())
  }

  return (
    <>
      {
        !!list.length &&
        <footer className="footer">
          <span className="todo-count">
            <strong>{unCompleted}</strong>
            {
              unCompleted > 1 ? ' items' : ' item'
            }
            <span> left</span>
          </span>
          <ul className="filters">
            <li><a href="#/" className="selected">All</a>
            </li>
            <span> </span>
            <li><a href="#/active" className="">Active</a>
            </li>
            <span> </span>
            <li>
              <a href="#/completed" className="">Completed</a>
            </li>
          </ul>
          {
            !!completed && <button className="clear-completed" onClick={onClearCompleted}>Clear completed</button>
          }
        </footer>
      }
    </>
  )
}
