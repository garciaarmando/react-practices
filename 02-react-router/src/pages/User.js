import { useParams } from "react-router";

const User = () => {
  // let params = useParams();

  // console.log(params);

  let { username } = useParams();
  return (
    <div>
      <h3>User Profile</h3>
      <p>
        User's name: <b>{username}</b>
      </p>
    </div>
  );
};

export default User;
