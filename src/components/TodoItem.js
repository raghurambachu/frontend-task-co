import React from "react";
import { TiDelete } from "react-icons/ti";

function TodoItem(props) {
  const { todoItem, dispatch, todoType } = props;
  return (
    <li
      className="my-2 text-lg w-8/12 sm:w-9/12"
      onClick={() =>
        dispatch({ type: "TOGGLE_TODO", payload: { id: todoItem.id } })
      }
    >
      <div className="relative">
        <div className="inline-flex items-center cursor-pointer">
          <input
            className="transform scale-150"
            type="checkbox"
            checked={todoItem.isChecked}
            onChange={() => {}}
          />
          <span
            className={`mx-3 description  font-semibold ${
              todoItem.isChecked ? "line-through text-gray-500" : ""
            }`}
          >
            {todoItem.desc}
          </span>
        </div>
        {todoItem.isChecked && todoType === "completed" && (
          <TiDelete
            className="cursor-pointer absolute right-0 top-0"
            size={24}
            onClick={() =>
              dispatch({
                type: "REMOVE_TODO",
                payload: { id: todoItem.id },
              })
            }
          />
        )}
      </div>
    </li>
  );
}

export default TodoItem;
