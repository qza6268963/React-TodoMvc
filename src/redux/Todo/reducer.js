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
    case 'UPDATE_STATUS_TODO': {
      const arr = [...state]
      arr[state.findIndex((item) => item.id === action.id)].status = !arr[state.findIndex((item) => item.id === action.id)].status
      return [...arr]
    }
    case 'CLEAR_TODO':{
      return state.filter(v => !v.status)
    }
    case 'TOGGLE_ALL_TODO': {
      return state.map(v => {
          v.status = action.status
          return v
        })
    }
    default:
      return state
  }
}