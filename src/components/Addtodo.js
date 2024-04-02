import React, { useEffect, useState } from "react";
import { Addbtn, UpdateBtn } from "../icons/icons";

const Addtodo = ({ editableTodo, dispatch }) => {
  const initialValue = { id: "", title: "" };
  const [newTodo, setNewtodo] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();
    if (editableTodo) {
      dispatch({
        type: "UPDATE",
        payload: { ...newTodo, id: editableTodo.id },
      });
      setNewtodo(initialValue);
    } else {
      dispatch({ type: "ADD", payload: newTodo });
      setNewtodo(initialValue);
    }
  }
  useEffect(() => {
    if (editableTodo) {
      setNewtodo(editableTodo);
    }
  }, [editableTodo]);
  return (
    <form className="flex relative" onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 border-2 w-full outline-none rounded-md"
        onChange={(e) => setNewtodo({ title: e.target.value })}
        value={newTodo.title}
      ></input>
      <button className="absolute right-0 border-l-2 h-full p-1 px-3   border-white hover:bg-green-500 rounded-md z-10 bg-orange-300">
        {editableTodo ? (
          <p>
            <UpdateBtn />
          </p>
        ) : (
          <p>
            <Addbtn />
          </p>
        )}
      </button>
    </form>
  );
};

export default Addtodo;
