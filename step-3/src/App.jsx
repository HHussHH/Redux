//components
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Filters from "./components/Filter";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Redux Todo</h1>
      <NewTodo />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
