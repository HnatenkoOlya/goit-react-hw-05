import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
      <p className="mb-6">Oh, you went to the wrong page</p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to home
      </Link>
    </div>
  );
}