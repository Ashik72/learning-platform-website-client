import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-9xl font-bold tracking-wider">
              4<span className="text-rose-800">0</span>4
            </h1>
            <p className="py-6">
              It looks like the page you're looking for doesn't exist.
            </p>
            <Link className="btn btn-primary " to="/">
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
