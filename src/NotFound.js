import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      oopss....
      <p>Page not Found!</p>
      <p>
        Why not visit our <Link to="/">HomePage</Link> 😉
      </p>
    </div>
  );
};

export default NotFound;
