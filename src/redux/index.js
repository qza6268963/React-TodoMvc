import thunk from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer} from './Todo/reducer'



const reducer = combineReducers({
  todoReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
export default store