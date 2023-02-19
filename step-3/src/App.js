import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store/todos/todos-actions";
function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Redux Todo</h1>
      <NewTodo />
      <TodoList />
    </div>
  );
}

const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(e.target.title.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="new todo" />
      <input type="submit" name="Add todo" />
    </form>
  );
};
const TodoList = () => {
  const todos = useSelector((state) => state);
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

export default App;
