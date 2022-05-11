import React from "react";

import "../src/App.css";
import SearchUsers from "./Userlist";
import SearchTodo from "./TodoList";

  const App = () =>{

    return(
      <div className="container">
        <h1>Higher Order Component</h1>
       <div className="components">
       <SearchUsers/>
        <SearchTodo/>
       </div>
      </div>
    )
  }

  export default App;