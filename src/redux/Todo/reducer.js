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
    default:
      return state
  }
}