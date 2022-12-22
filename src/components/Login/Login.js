import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../context/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export default function Login() {
  const { emailAndPasswordSignIn, googleSignIn, githubSignIn } =
    useContext(authContext);
  const [errorText, setErrorText] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  // Email and Password SignIn
  const handleEmailAndPasswordSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    emailAndPasswordSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
      });
  };

  // Google LogIn
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
      });
  };

  //Github LogIn
  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setErrorText(error.message);
      });
  };
  return (
    <div className="hero min-h-screen bg-slate-800">
      <div className="hero-content flex-row lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleEmailAndPasswordSignIn} className="card-body">
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
            </div>
            <p className="text-rose-900 label-text-alt text-start">
              {errorText}
            </p>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <p className="text-center">Or</p>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-success mb-2"
              >
                Google
              </button>
              <button
                onClick={handleGithubSignIn}
                className="btn btn-outline btn-success"
              >
                GitHub
              </button>
              <label className="label">
                <h3 className="label-text-alt ">
                  Don't have an account?
                  <Link className="link link-hover" to="/register">
                    <span> </span> Register
                  </Link>
                </h3>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
