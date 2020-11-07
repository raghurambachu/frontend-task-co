import React from "react";

function TodoType(props) {
  const { todoType, dispatch } = props;

  return (
    <div className="todo-type text-sm sm:text-base flex justify-evenly space-x-2 xs:space-x-6 sm:space-x-12 ">
      <div className="relative py-1">
        <button
          className={`btn-all font-bold focus:outline-none pb-1 w-24 `}
          onClick={() =>
            dispatch({ type: "SET_ACTIVE_TAB", payload: { activeTab: "all" } })
          }
        >
          All
        </button>
        <span
          className={`absolute bottom-0 left-0 ${
            todoType === "all"
              ? " border-blue-500 inline-block rounded-t  border-b-4 w-24 transition duration-200 ease-in-out"
              : ""
          }`}
        ></span>
      </div>
      <div className="relative">
        <button
          className={`btn-all font-bold focus:outline-none pb-1 w-24 `}
          onClick={() =>
            dispatch({
              type: "SET_ACTIVE_TAB",
              payload: { activeTab: "active" },
            })
          }
        >
          Active
        </button>
        <span
          className={`absolute bottom-0 left-0 ${
            todoType === "active"
              ? " border-blue-500 inline-block rounded-t  border-b-4 w-24 transition duration-200 ease-in-out"
              : ""
          }`}
        ></span>
      </div>
      <div className="relative">
        <button
          className={`btn-all font-bold focus:outline-none pb-1 w-24 `}
          onClick={() =>
            dispatch({
              type: "SET_ACTIVE_TAB",
              payload: { activeTab: "completed" },
            })
          }
        >
          Completed
        </button>
        <span
          className={`absolute bottom-0 left-0 ${
            todoType === "completed"
              ? " border-blue-500 inline-block rounded-t  border-b-4 w-24 transition duration-200 ease-in-out"
              : ""
          }`}
        ></span>
      </div>
    </div>
  );
}

export default TodoType;
