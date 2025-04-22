import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>Oh, you went to the wrong page</p>
      <Link to="/">
        Back to home
      </Link>
    </div>
  );
}