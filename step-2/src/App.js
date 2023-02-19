import { useSelector, useDispatch } from "react-redux";
import { inc, dec, res } from "./store/actions/actions";
function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <h1>Hello Redux</h1>
      <Counter />
    </div>
  );
}

const Counter = () => {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(inc)}>+</button>
      <button onClick={() => dispatch(dec)}>-</button>
      <button onClick={() => dispatch(res)}>reset</button>
    </div>
  );
};

export default App;
