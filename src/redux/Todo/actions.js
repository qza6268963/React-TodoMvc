export const iniTodo = () => dispatch =>{
  dispatch({
    type:'INIT_TODO',
    todo:[]
  })
}

export const finishTodo =(todo) => dispatch => {
  dispatch({
    type:'FINISH_TODO',
    todo
  })
}

export const addTodo =(todoName) => dispatch => {
  dispatch({
    type:'ADD_TODO',
    todo:{
      id: Math.random(),
      completed:false,
      name:todoName
    }
  })
}

export const deleteTodo =(id) => dispatch => {
  dispatch({
    type:'DELETE_TODO',
    id
  })
}

export const updateCompletedTodo =(id) => dispatch => {
  dispatch({
    type:'UPDATE_COMPLETED_TODO',
    id
  })
}

export const clearCompletedTodo =() => dispatch => {
  dispatch({
    type:'CLEAR_TODO'
  })
}

export const toggleAllTodo =(completed) => dispatch => {
  dispatch({
    type:'TOGGLE_ALL_TODO',
    completed
  })
}



