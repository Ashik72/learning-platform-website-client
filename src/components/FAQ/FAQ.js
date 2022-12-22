import React from "react";

export default function FAQ() {
  return (
    <div className="">
      <div className="p-16">
        <h1 className="text-5xl text-center mb-10">
          Frequently Asked Questions (FAQ)
        </h1>
        <div
          tabIndex={0}
          className="mb-2 text-start collapse collapse-arrow border border-base-400 bg-base-200 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            1. What do you offer?
          </div>
          <div className="collapse-content">
            <p>
              On our platform you will find industry focused live batches with
              task based curriculum.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mb-2 text-start collapse collapse-arrow border border-base-400 bg-base-200 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            2. How do I join the batch?
          </div>
          <div className="collapse-content">
            <p>
              Register on the platform, select your preferred skill and schedule
              and join the batch by paying.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="text-start collapse collapse-arrow border border-base-400 bg-base-200 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            3. Are the courses prerecorded?
          </div>
          <div className="collapse-content">
            <p>
              No, all our courses are live. You can join live courses from your
              dashboard at scheduled times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
