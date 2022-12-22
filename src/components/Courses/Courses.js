import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoursesItems from "../CoursesItems/CoursesItems";

export default function Coureses() {
  const items = useLoaderData();
  return (
    <div className="lg:flex lg:flex-row flex-col">
      <div className="lg:w-1/4 pt-20 bg-gray-200">
        <h4 className="text-2xl pb-3">All categories</h4>

        <ul className="menu menu-compact lg:menu-normal  w-56 mx-auto p-2 rounded-box">
          {items.map((item) => (
            <li
              className="border-solid border-2 border-indigo-600 mb-5 rounded-box"
              key={item.category_id}
            >
              <Link to={`/course/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 lg:w-3/4">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {items.map((item) => (
            <CoursesItems key={item.category_id} item={item}></CoursesItems>
          ))}
        </div>
      </div>
    </div>
  );
}
