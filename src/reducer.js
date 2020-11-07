export const initialState = {
  todos: [],
  activeTab: "all",
};

// todo structure {id,desc,isChecked}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const { todo } = action.payload;
      if (state.todos.some((todoItem) => todoItem.desc === todo.desc)) {
        return state;
      }
      return { ...state, todos: [todo, ...state.todos] };
    }
    case "REMOVE_TODO": {
      const { id } = action.payload;
      if (!state.todos.some((todoItem) => todoItem.id === id)) return state;
      const todos = state.todos.filter((todoItem) => todoItem.id !== id);
      return { ...state, todos };
    }
    case "SET_ACTIVE_TAB": {
      const { activeTab } = action.payload;
      return { ...state, activeTab };
    }
    case "TOGGLE_TODO": {
      const { id } = action.payload;

      const todos = state.todos.map((todoItem) => {
        if (todoItem.id === id) {
          return { ...todoItem, isChecked: !todoItem.isChecked };
        }
        return todoItem;
      });
      return { ...state, todos };
    }
    default:
      return state;
  }
}
