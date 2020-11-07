import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todos, dispatch, todoType } = props;
  return (
    <ul className="px-1 sm:px-0">
      {todos.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          dispatch={dispatch}
          todoType={todoType}
        />
      ))}
    </ul>
  );
}

export default TodoList;
