import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex items-center flex-col gap-4 p-10">
        <div className="">
          <h1 className="text-orange-500 font-semibold text-6xl">404</h1>
          <h2 className="text-gray-700">Page Not Found</h2>
        </div>

        <p className="text-gray-700">
          Sorry, the page you are looking for does not exist.
        </p>

        <p className="text-gray-700">
          Please check the URL or go back to the{" "}
          <Link className="text-orange-500" to="/">
            home page
          </Link>
          .
        </p>

        <p className="text-gray-700">
          If you think this is a mistake, please contact us.
        </p>

        <p className="text-gray-700">Thank you.</p>
      </div>
    </div>
  );
};

export default NotFound;
