import Contador from "./components/Contador";

function App() {
  return (
    <div>
      <h3>Memoization in React</h3>

      <p>The three options that we have are:</p>

      <h4>
        <a href="https://es.reactjs.org/docs/react-api.html#reactmemo">
          React Memo
        </a>
      </h4>

      <ul>
        <li>Memorized a component</li>
        <li>
          Memorized again when their <b>props</b> change
        </li>
        <li>Avoids unseful re-renders</li>
        <li>
          You have to avoid their use always that you can because it might be
          more expensive the memorization task than the re-render of the
          component
        </li>
      </ul>
      <h4>Use it when:</h4>
      <ul>
        <li>You have a lot of elements rendered in a list</li>
        <li>You called data from an API</li>
        <li>a component becomes too heavy</li>
        <li>You have performance alerts in the console</li>
      </ul>

      <Contador />

      <hr />

      <h4>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usememo">
          useMemo
        </a>
      </h4>
      <hr />

      <h4>
        <a href="https://es.reactjs.org/docs/hooks-reference.html#usecallback">
          useCallback
        </a>
      </h4>

      <hr />
    </div>
  );
}

export default App;
