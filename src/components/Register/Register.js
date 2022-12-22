import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../context/UserContext";

export default function Register() {
  const { emailAndPasswordSignUp, updateUserProfile } = useContext(authContext);
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();

  //Email and Password LogIn
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    emailAndPasswordSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate("/");
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-slate-800">
      <div className="hero-content flex-row lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo url</span>
              </label>
              <input
                name="photoURL"
                type="text"
                placeholder="Phot URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />

              <p className="text-rose-900 label-text-alt text-start">
                {errorText}
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <label className="label">
              <h3 className="label-text-alt ">
                Already An Have Account?{" "}
                <Link className="link link-hover" to="/login">
                  Login
                </Link>
              </h3>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}
