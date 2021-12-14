import { Link, Outlet } from "react-router-dom";

export const ReactTopics = () => {
  return (
    <div>
      <h3> React Topics </h3>
      <ul>
        <li>
          <Link to="jsx"> JSX </Link>
        </li>
        <li>
          <Link to="props"> Props </Link>
        </li>
        <li>
          <Link to="state"> State </Link>
        </li>
        <li>
          <Link to="components"> Components </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
