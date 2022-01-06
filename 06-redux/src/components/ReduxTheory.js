import reduxImg from "../assets/images/reduxworkflow.png";

const ReduxTheory = () => {
  return (
    <div>
      <h1>REDUX</h1>
      <hr />
      <h2>Theory and concepts</h2>
      <ul>
        <li>
          <b>Store</b>: A single source of truth for the application state.
        </li>
        <li>
          <b>Dispatch</b>: Execute an action that will update the state
        </li>
        <li>
          <b>Action</b>: A JS object with two properties: <i>type</i> and{" "}
          <i>payload</i> (data and optional)
        </li>
        <li>
          <b>Subscribe</b>: It's an event handler for the <i>state</i>
        </li>
        <li>
          <b>Reucers</b>: Those are functions that manage the <i>actions</i>
        </li>
      </ul>
      <img
        src={reduxImg}
        alt=""
        style={{ width: "50%", height: "auto", marginTop: "2rem" }}
      />
    </div>
  );
};

export default ReduxTheory;
