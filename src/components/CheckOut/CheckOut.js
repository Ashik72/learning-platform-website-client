import React, { useContext } from "react";
import { BsPeople } from "react-icons/bs";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../../context/UserContext";

export default function CheckOut() {
  const item = useLoaderData();
  const { price, image_url, title, details, total_enroll, published_date } =
    item;
  const { user } = useContext(authContext);
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* <!-- Image gallery --> */}
        <div className="">
          <img className="mx-auto w-96	" src={image_url} alt="" />
        </div>

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl text-start font-bold tracking-tight text-gray-900 sm:text-3xl">
              <h1>{title}</h1>
            </h1>
          </div>
          {/* Right side */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h1 className=" tracking-tight text-gray-900 sm:text-3xl">
              Your Profile Information
            </h1>
            <div className="overflow-x-auto w-full">
              <table className="table w-full">
                {/* <!-- head --> */}

                <tbody>
                  {/* <!-- row 1 --> */}
                  <tr>
                    <td>Name: </td>
                    <td>
                      <h1 className="text-xl font-bold">{user.displayName}</h1>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <h1>Profile Picture: </h1>
                    </td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={user.photoURL}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* <!-- row 3 --> */}
                  <tr>
                    <td>Your Eamil: </td>
                    <td>{user.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Left side  */}
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            <div>
              <div className="space-y-6">
                <p className="text-base text-start text-gray-900">{details}</p>
              </div>
            </div>
            <div className="p-5 mt-5 w-full flex justify-between items-center border-dotted border-2 border-indigo-600">
              <div className="text-base">Published Date: {published_date}</div>
              <div className="text-base flex items-center">
                Toatal Enroll: {total_enroll}
                <BsPeople />
              </div>
            </div>
          </div>
          <div className="mt-4 text-start">
            <h1 className="text-emerald-600 text-2xl">Price: ${price}</h1>
          </div>
          <div className="mt-4 text-end mr-8">
            <button className="btn btn-success text-white">Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
}
