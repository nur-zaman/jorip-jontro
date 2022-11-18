import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Card } from "../../components/Card";

export default function profile({ data }) {
  return (
    <>
      <Navbar></Navbar>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center">
          {/* <!-- Page content here --> */}
          {/* <Card title='Edit Profile'></Card> */}
          <div className=" h-fit w-1/2  rounded-sm bg-base-200 p-4 ">
            <form action="/api/updateProfile" method="post">
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Your Email</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">Email</span>
                  <input
                    type="text"
                    placeholder="info@site.com"
                    className="input-bordered input flex-grow"
                    value={data.email}
                  />
                </label>

                <label className="label">
                  {/* <span className="label-text">Your Password</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">password</span>
                  <input
                    type="password"
                    className="input-bordered input flex-grow"
                    value={data.password}
                  />
                </label>

                <label className="label">
                  {/* <span className="label-text">Age</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">Age</span>
                  <input
                    type="text"
                    className="input-bordered input flex-grow"
                    value={data.age}
                  />
                </label>

                <label className="label">
                  {/* <span className="label-text">Location</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">Location</span>
                  <input
                    type="text"
                    className="input-bordered input flex-grow"
                    value={data.location}
                  />
                </label>

                <input
                  type="submit"
                  value="Update Profile"
                  className="btn m-4 p-2"
                />
              </div>
            </form>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    email: "good",
  });

  const response = await fetch("http://localhost:3000/api/getProfile", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const result = await response.json();
  const data = result.data;

  return { props: { data } };
}
