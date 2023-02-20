import { SET_FILTER } from "../constants/filters-const";

export const setFilter = (filter) => ({
  type: SET_FILTER,
  filter,
});
