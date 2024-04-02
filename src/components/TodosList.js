import React, { useState } from "react";
import { DelteBtn, EditBtn } from "../icons/icons";

const TodosList = ({ data, dispatch, editTodo }) => {
  const [completed, setCompleted] = useState(false);
  return (
    <div className="border-2 p-2 rounded h-auto flex justify-between items-center border-white w-full">
      <div className="w-[90%] h-fit flex justify-between items-center gap-5 scrolll px-1">
        <div
          className={`${
            completed && "font-outline-2 "
          } text-lg font-serif   trans text-white h-fit`}
        >
          <input
            type="checkbox"
            className="mx-2 accent-green-500"
            onClick={() => setCompleted(!completed)}
          ></input>
          {data.title}
        </div>
        {completed && (
          <span className="text-green-500 text-xs">TaskCompleted</span>
        )}
      </div>
      <div className="flex ">
        <i
          className=" p-2  cursor-pointer border-0 rounded-full hover:border-2"
          onClick={()=>dispatch({type:'DELETE',payload:data.id})}
        >
          <DelteBtn />
        </i>
        <i
          className=" p-2  cursor-pointer border-0 rounded-full hover:border-2"
          onClick={() => editTodo(data.id)}
        >
          <EditBtn />
        </i>
      </div>
    </div>
  );
};

export default TodosList;
