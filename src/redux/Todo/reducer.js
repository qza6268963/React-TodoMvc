export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'FINISH_TODO': {
      return action.todo
    }
    case 'ADD_TODO': {
      return [...state, action.todo]
    }
    case 'DELETE_TODO': {
      const arr = [...state]
      arr.splice(state.findIndex((item) => item.id === action.id), 1)
      return [...arr]
    }
    case 'UPDATE_COMPLETED_TODO': {
      const arr = [...state]
      arr[state.findIndex((item) => item.id === action.id)].completed = !arr[state.findIndex((item) => item.id === action.id)].completed
      return [...arr]
    }
    case 'CLEAR_TODO':{
      return state.filter(v => !v.completed)
    }
    case 'TOGGLE_ALL_TODO': {
      return state.map(v => {
          v.completed = action.completed
          return v
        })
    }
    default:
      return state
  }
}