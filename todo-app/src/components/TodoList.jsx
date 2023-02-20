import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { removeTodo, toggleTodo } from "../store/actions/todos-actions";
import { selecetVisibleTodos } from "../store/selectors/todos-selectors";

const TodoList = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const todos = useSelector((state) => selecetVisibleTodos(state, filter));
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
