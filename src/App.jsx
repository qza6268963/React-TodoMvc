import React from 'react'
import { TodoHeader } from "./components/TodoHeader";
import { TodoItemList } from "./components/TodoItemList";
import { TodoFooter } from "./components/TodoFooter";
import PageNoFound from "./components/PageNoFound";
import {
  BrowserRouter as Router,
  Redirect,
  Route ,
  Switch
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className='todoapp'>
          <TodoHeader/>
          <Switch>
            (<Route path="/todo/all">
              <TodoItemList/>
            </Route>
            <Route path="/todo/active">
              <TodoItemList/>
            </Route>
            <Route path="/todo/completed">
              <TodoItemList/>
            </Route>
            <Redirect from="/todo/*" to="/todo/all"/>)
            <Route path="*">
              <PageNoFound/>
            </Route>
          </Switch>
          <TodoFooter/>
      </div>
    </Router>
  );
}

export default App;
