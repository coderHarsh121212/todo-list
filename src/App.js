import { useReducer, useState } from "react";
import "./App.css";
import Addtodo from "./components/Addtodo";
import TodosList from "./components/TodosList";
import { TodoData } from "./data/data";

function App() {
  const [editableTodo, setEditabletodo] = useState(null);
  
  function todoReducer(todolist, action) {
    switch (action.type) {
      case "ADD":
        return [...todolist, { ...action.payload, id: todolist.length + 1 }];
        case "DELETE":
          return todolist.filter((e) => e.id !== action.payload);
          case "UPDATE":
            let index = todolist.findIndex((e) => e.id === action.payload.id);
            let newtodos = [...todolist];
            newtodos.splice(index, 1, {
              title: action.payload.title,
              id: index + 1,
            });
            setEditabletodo(null);
            return newtodos;
            default:
              return todolist;
            }
          }
          
          const [todolist, dispatch] = useReducer(todoReducer, TodoData);
  function editTodo(id) {
    setEditabletodo(todolist.find((e) => e.id === id));
  }

  return (
    <div className="App w-full h-screen flex justify-center items-center bg">
      <div className="w-full min-h-16 flex flex-col border-2  sm:w-1/2 lg:w-1/3 rounded-md shadow-2xl border-white p-1 box-bg h-fit">
        <div className="p-1 py-2 border-b-2">
          <Addtodo dispatch={dispatch} editableTodo={editableTodo} />
        </div>
        <div className="p-2 flex flex-col gap-3 mt-1">
          {todolist.map((e) => (
            <TodosList
              key={e.id}
              data={e}
              dispatch={dispatch}
              editTodo={editTodo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
