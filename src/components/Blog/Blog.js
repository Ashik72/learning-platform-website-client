import React from "react";

export default function Blog() {
  return (
    <div className="p-16 ">
      <h1 className="text-5xl text-center mb-10">Blog</h1>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className=" text-xl font-medium">1. What is cors?</div>
        <div className="">
          <p>
            CORS is a node. js package for providing a Connect/Express
            middleware that can be used to enable CORS with various options.
            This module supports validating the origin dynamically using a
            function provided to the origin option. This function will be passed
            a string that is the origin. Certain CORS requests are considered
            ‘complex’ and require an initial OPTIONS request (called the
            “pre-flight request”).
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </div>
        <div className="">
          <p>
            Firebase helps you develop high-quality apps, grow your user base,
            and earn more money. Each feature works independently, and they work
            even better together.Firebase completely freed our engineers from
            managing campaign infrastructure, and helped our team to be more
            effective and our campaigns to perform better—which is a huge win
            for us.
            <br />
            Usually, authentication by a server entails the use of a user name
            and password. a. Password-based authentication · b.
            Two-factor/multifactor authentication · c. Biometric authentication
            · d. Single sign-on · e. Token-based authentication.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          3. How does the private route work?
        </div>
        <div className="">
          <p>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in). Sets can take a private prop which makes all Routes
            inside that Set require authentication.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          4. What is Node? How does Node work?
        </div>
        <div className="">
          <p>
            Node.js is written in C, C++, and JavaScript, and it is built on the
            open-source V8 JavaScript engine which also powers JS in browsers
            such as Google Chrome. As V8 supports new features in JavaScript,
            they are incorporated into Node.
            <br />
            It is a used as backend service where javascript works on the
            server-side of the application. This way javascript is used on both
            frontend and backend.
          </p>
        </div>
      </div>
    </div>
  );
}
