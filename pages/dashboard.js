import { Card } from "../components/Card";
import ExternalForm from "../components/SurveyForm/ExternalForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import SurveyForm from "../components/SurveyForm/SurveyForm";

import dynamic from "next/dynamic";
const SurveyForm = dynamic(
  () => import("../components/SurveyForm/SurveyForm"),
  { ssr: false } // <-- not including this component on server-side
);

export default function dashboard() {
  return (
    <>
      {/* <div class="navbar bg-base-100">
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-ghost drawer-button"><i class="material-icons mr-2">menu</i></label>

    </div>
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">TECH-CYSNE</a>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div> */}

      <Navbar></Navbar>

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}
          <Card></Card>
          <div className="flex-grow">
            {/* <ExternalForm></ExternalForm>
            <ExternalForm></ExternalForm>
            <ExternalForm></ExternalForm> */}
            <SurveyForm></SurveyForm>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
