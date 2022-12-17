import Avatar from "react-nice-avatar";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
export default function profile({ data }) {
  const config = {
    sex: "man",
    faceColor: "#F9C9B6",
    earSize: "small",
    eyeStyle: "smile",
    noseStyle: "long",
    mouthStyle: "smile",
    shirtStyle: "short",
    glassesStyle: "none",
    hairColor: "#000",
    hairStyle: "thick",
    hatStyle: "none",
    hatColor: "#F48150",
    eyeBrowStyle: "up",
    shirtColor: "#9287FF",
    bgColor: "#F4D150",
  };

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center">
          {/* <!-- Page content here --> */}
          {/* <Card title='Edit Profile'></Card> */}

          <div className=" h-fit w-1/2  rounded-sm bg-base-200 p-4 ">
            <div className="flex  justify-center">
              <Avatar className=" h-28 w-28 content-center" {...config} />
            </div>
            <form action="/api/updateProfile" method="post" target="_blank">
              <div className="form-control">
                <label className="label">
                  {/* <span className="label-text">Your Email</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">Email</span>
                  <input
                    type="text"
                    name="email"
                    placeholder="info@site.com"
                    className="input-bordered input flex-grow"
                    readOnly
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
                    name="password"
                    defaultValue={data.password}
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
                    name="age"
                    defaultValue={data.age}
                  />
                </label>

                <label className="label">
                  {/* <span className="label-text">Location</span> */}
                </label>
                <label className="input-group">
                  <span className=" w-40 text-lg ">Address</span>
                  <input
                    type="text"
                    className="input-bordered input flex-grow"
                    name="address"
                    defaultValue={data.address}
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
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const userid = ctx.params.id;

  // let data = userid;
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    _id: userid,
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
