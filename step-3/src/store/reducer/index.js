import { combineReducers } from "redux";
import { todos } from "./todos-reducer";
import { filters } from "./filter-reducer";
export const rootReducer = combineReducers({
  todos,
  filters,
});
