import React from 'react'
import { TodoHeader } from "./components/TodoHeader";
import { TodoItemList } from "./components/TodoItemList";
import { TodoFooter } from "./components/TodoFooter";
import { useSelector } from "react-redux";

function App() {
  const list = useSelector((state) => state.todoReducer)
  // const [stateList, setStateList] = useState(list)
  // const destroy = (id) => {
  //   const arr = [...stateList]
  //   arr.splice(stateList.findIndex((item) => item.id === id), 1)
  //   setStateList(arr)
  // }
  return (
    <div className='todoapp'>
      <TodoHeader/>
      <TodoItemList list={list}/>
      <TodoFooter/>
    </div>
  );
}

export default App;
