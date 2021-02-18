import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { clearCompletedTodo } from '../redux/Todo/actions'
import { NavLink  } from "react-router-dom"

export const TodoFooter = () => {
  const dispatch = useDispatch()
  const list = useSelector((state) => state.todoReducer)
  let unCompleted = 0
  let completed = 0
  list.forEach(v => {
    if(!v.completed) unCompleted++
    if(v.completed) completed++
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
            <li><NavLink to="/todo/all" activeClassName="selected">All</NavLink>
            </li>
            <li><NavLink to="/todo/active" activeClassName="selected">Active</NavLink>
            </li>
            <li>
              <NavLink to="/todo/completed" activeClassName="selected">Completed</NavLink>
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
