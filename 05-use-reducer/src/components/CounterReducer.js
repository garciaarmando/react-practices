import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterReducer = () => {
  // const [count, setCount] = useState(0);
  //dispatch = setCount function in useState
  const [state, dispatch] = useReducer(reducer, initialState);

  // const increase = e => setCount(count + 1);
  const increase = e => dispatch({ type: "increase" });
  // const decrease = e => setCount(count - 1);
  const decrease = e => dispatch({ type: "decrease" });

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter with useReducer</h2>
      <nav>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </nav>
      <h3>{state.count}</h3>
    </div>
  );
};

export default CounterReducer;
