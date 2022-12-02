import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar">
          <div className="w-32 rounded  ">
            <Image
              src="/vercel.svg"
              alt="LOGO"
              layout="fill"
              className=" text-slate-200"
            />
          </div>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome to Jorip Jontro!</h1>
          <p className="py-6">Login or Sign Now!</p>
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <form action="/api/login" method="post">
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input-bordered input"
                />
                <label className="label">
                  <a href="#" className="link-hover label-text-alt link">
                    Forgot password?
                  </a>
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
                <Link href={"signup"}>
                  <button className="btn-primary btn mt-2">Sign Up</button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
