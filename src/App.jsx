import React from 'react'
import { TodoHeader } from "./components/TodoHeader";
import { TodoItemList } from "./components/TodoItemList";
import { TodoFooter } from "./components/TodoFooter";

function App() {
  return (
    <div className='todoapp'>
      <TodoHeader/>
      <TodoItemList/>
      <TodoFooter/>
    </div>
  );
}

export default App;
