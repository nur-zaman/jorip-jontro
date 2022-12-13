import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Settings() {
  const router = useRouter();
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
            <button className="btn m-2">
              <Link href={"/"}>Delete Account</Link>
            </button>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
