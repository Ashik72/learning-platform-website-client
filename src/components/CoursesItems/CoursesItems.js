import React from "react";
import { Link } from "react-router-dom";

export default function CoursesItems({ item }) {
  const { image_url, title, price } = item;
  return (
    <div>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={image_url}
            alt=""
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href="#">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${price}</p>
        </div>
      </div>
      <button className="btn btn-outline btn-sm">
        <Link to={`/course/${item._id}`}>Details</Link>
      </button>
    </div>
  );
}
