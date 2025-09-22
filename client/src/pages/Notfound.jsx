import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-error">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <Link to="/" className="btn btn-primary mt-6">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
