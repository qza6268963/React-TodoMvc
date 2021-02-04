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
      status:false,
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

