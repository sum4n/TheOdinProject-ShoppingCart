import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route does not exist!</h1>
      <Link to="/">Return to Home page</Link>
    </div>
  );
};

export default ErrorPage;
