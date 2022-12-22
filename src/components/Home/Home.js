import React from "react";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";
import FAQ from "../FAQ/FAQ";

export default function Home() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              FLearning that gets you rontend Developer
            </h1>
            <p className="mb-5">
              Biggest Companies Are Powered by aspiring DEVELOPERS just like
              you. We focus on giving you real developer skills that bring you
              real results: Clients, jobs, self-improvement and profit. Our
              students aren't just satisfied... They've gotten real results as
              developers .
            </p>
            <button className="btn btn-primary">
              <Link className="text-white" to="/course">
                Get Started
              </Link>
            </button>
          </div>
        </div>
      </div>
      <FAQ></FAQ>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-indigo-600">
              Start your free trial today.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/course"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
              >
                Course
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Blog></Blog>
    </>
  );
}
