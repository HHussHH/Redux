import { useSelector, useDispatch } from "react-redux";
import { removeTodo, toggleTodo } from "../store/actions/todos-actions";
import { selecetVisibleTodos } from "../store/selectors/todos-selectors";
import { selectActiveFilter } from "../store/selectors/filters-selectors";
const TodoList = () => {
  const activeFilter = useSelector(selectActiveFilter);
  const todos = useSelector((state) =>
    selecetVisibleTodos(state, activeFilter)
  );
  const dispatch = useDispatch();
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.title}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
          <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
