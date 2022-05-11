import React from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
    console.log("posts", data)
  // const [todo, setTodo] = useState([]);
  // const [term, setTerm] = useState("");

  // const fetchTodo = async () =>{
  //    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //    const response = await res.json();
  //    console.log("todo", response);
  //    setTodo(response);
  // }

  // useEffect(()=>{
  //     fetchTodo()
  // },[])

  // const filteredTodo = todo.slice(0,10)
  // .filter(({title})=>{
  //     return title.indexOf(term)>=0;
  // }).map((todo)=>{
  //    return <div key={todo.id}>
  //     <p>
  //         <strong>{todo.title}</strong>
  //     </p>
  // </div>

  // }) 

  

  let renderTodos = data.slice(0,10).map((todo) => {
    return (
      <div key={todo.id}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      {/* <input type="text" value={term} onChange={(e)=>setTerm(e.target.value)} /> */}
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodo = HOC(TodoList, "posts")

export default SearchTodo;
