import Link from "next/link";
import React from "react";

export default function Register() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Really POG Description about the project that Ill remove soon
          </p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form action="/api/register" method="post">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input-bordered input"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Age</span>
                </label>
                <input
                  type="text"
                  name="age"
                  placeholder="age"
                  className="input-bordered input"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input-bordered input"
                />
                <label className="label">
                  <Link href={"/"} className="link-hover label-text-alt link">
                    Already Have Account?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn-primary btn"
                ></input>
                {/* <input type="submit" className="btn-primary btn">
                  Login
                </input> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
