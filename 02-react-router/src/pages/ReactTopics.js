import { Link } from "react-router-dom";

export const ReactTopics = () => {
  // let match = useRout;
  return (
    <div>
      <h3>React Topics</h3>
      <ul>
        <li>
          <Link to="react/jsx">JSX</Link>
        </li>
        <li>
          <Link to="react/props">Props</Link>
        </li>
        <li>
          <Link to="react/state">State</Link>
        </li>
        <li>
          <Link to="react/components">Components</Link>
        </li>
      </ul>
      {/*   <Switch>
        <Route></Route>
     </Switch> */}
    </div>
  );
};
