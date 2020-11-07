import React, { useReducer, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoType from "./TodoType";
import { reducer, initialState } from "../reducer";

// Generally name shud be App, but to distinguish used TodoApp
function TodoApp() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [mode, setMode] = useState("light");
  const todos = getActiveTabTodos(state.todos, state.activeTab);
  return (
    <div
      className={`min-h-screen text-gray-600  relative transition duration-200 cursor-pointer ${
        mode === "light" ? "bg-gray-200" : "bg-gray-900"
      }`}
    >
      <div className="max-w-xl  mx-auto px-1 sm:px-0">
        <h1 className="text-4xl font-bold text-center pt-10 mb-8">#todo</h1>

        <TodoType todoType={state.activeTab} dispatch={dispatch} />
        <hr className="border-b-0 border-gray-400 border-t-2  "></hr>
        <TodoInput dispatch={dispatch} />
        <TodoList
          todoType={state.activeTab}
          todos={todos}
          dispatch={dispatch}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-56 h-56  sm:w-64 sm:h-64 bg-blue-200 rounded-t-full rounded-b-none rounded-l-none rounded-r-full md:block bottom-design bottom-circle ">
        <div
          className={`absolute bottom-0 left-0 w-48 h-48 sm:w-56 sm:h-56 ${
            mode === "light" ? "bg-gray-200" : "bg-gray-900"
          }  rounded-t-full rounded-b-none rounded-l-none rounded-r-full`}
        ></div>
      </div>

      <div className="absolute right-0 top-0 p-4">
        {mode === "light" ? (
          <BsMoon size={24} onClick={() => setMode("dark")} />
        ) : (
          <BsSun
            className="text-yellow-600"
            size={24}
            onClick={() => setMode("light")}
          />
        )}
      </div>
    </div>
  );
}

function getActiveTabTodos(todos, activeTab) {
  switch (activeTab) {
    case "all":
      return todos;
    case "active":
      return todos.filter((todoItem) => !todoItem.isChecked);
    case "completed":
      return todos.filter((todoItem) => todoItem.isChecked);
    default:
      return todos;
  }
}

export default TodoApp;
