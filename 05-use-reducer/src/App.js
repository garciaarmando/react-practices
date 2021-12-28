import CounterReducer from "./components/CounterReducer";
import CounterReducerEnhanced from "./components/CounterReducerEnhanced";

function App() {
  return (
    <div>
      <h1>useReducer</h1>
      <hr />
      <CounterReducerEnhanced />
      <hr />
      <CounterReducer />
    </div>
  );
}

export default App;
