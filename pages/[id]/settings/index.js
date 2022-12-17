import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Router from "next/router";

async function deleteProfile(userid) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    _id: userid,
  });

  let response = await fetch("http://localhost:3000/api/delete-profile", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  if (response.status == 200) {
    Router.push("/");
  }
}

export default function Settings() {
  const router = useRouter();
  const userid = router.query.id;
  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col flex-wrap items-center ">
          <div className="  flex  h-fit w-1/2 flex-col items-center justify-center rounded-sm bg-base-200 p-4">
            <div className=" text-3xl ">Settings</div>
            <button className="btn m-2">
              <Link href={"/" + router.query.id + "/settings/profile"}>
                Edit Profile
              </Link>
            </button>
            <Link href={"/" + router.query.id + "/points"}>
              <button className="btn m-2">Manage Points</button>
            </Link>

            <div className="form-control mb-2">
              <label className="input-group">
                <span>Minimum Points</span>
                <input
                  type="text"
                  placeholder="10"
                  className="input-bordered input "
                />
              </label>
            </div>

            <label htmlFor="my-modal-6" className="btn">
              Delete Account
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="text-lg font-bold">ARE YOU SURE?</h3>
                <p className="py-4 text-error">
                  Are you sure you want to delete your account ?
                </p>
                <div className="modal-action">
                  <label
                    htmlFor="my-modal-6"
                    className="btn bg-success text-primary-content"
                  >
                    NO, Cancel!
                  </label>
                  <label
                    htmlFor="my-modal-6"
                    className="btn bg-error text-primary-content"
                    onClick={() => {
                      deleteProfile(userid);
                    }}
                  >
                    Yes, Confirm !
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
