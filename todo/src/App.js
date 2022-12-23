import { useState } from "react";
import Form from "./Component/Form";
import Header from "./Component/Header";
import TodoList from "./Component/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <TodoList nirList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
