import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { BsPeople } from "react-icons/bs";
import ReactToPrint from "react-to-print";

export default function CoursesItemsDetails() {
  const item = useLoaderData();
  const { price, image_url, title, details, total_enroll, published_date } =
    item;
  const ref = useRef();
  return (
    <div className="m-10">
      <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96 h-96" src={image_url} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-3xl ">{title}</h2>
            <p className="text-end">Published Date: {published_date}</p>
          </div>
          <p className="text-left">{details}</p>
          <h1 className="text-xl text-left">Price: ${price} </h1>
          <div className="card-actions justify-between justify-end">
            <div className="">
              <p className="text-xl flex items-center">
                Toatal Enroll: {total_enroll}
                <span>
                  <BsPeople />
                </span>
              </p>
            </div>
            <Link to={`/course/${item._id}/checkout`}>
              <button className="btn btn-primary btn-info">
                <FaLock className="pr-1" />
                <span> </span> Get Premium Access
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ReactToPrint
          trigger={() => <button className="btn">Print this out!</button>}
          content={() => ref.current}
        />
      </div>
    </div>
  );
}
