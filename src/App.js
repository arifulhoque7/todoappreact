import "./App.css";
import { useState } from "react";
import Icsscomp from "./components/Icsscomp";
// import InlineComponent from "./components/Inlinecomponent";

const formStyle ={
  textAlign: "center"
}

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  let tempList = todoList;

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    tempList.push(todo);
    setTodoList(tempList);
    setTodo("");
  };

  return (
    <div>
      <Icsscomp />
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <div style={formStyle}>

      {todoList.map((item) => (
        <Listitem key={item} name={item}/>
      ))}
      </div>
    </div>
  );
}

export default App;
