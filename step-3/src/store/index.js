import { createStore } from "redux";
import { todos } from "./todos/todos-reducer";

export const store = createStore(
  todos,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
