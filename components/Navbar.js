import Avatar from "react-nice-avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

function Navbar() {
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
  const router = useRouter();

  return (
    <div className="">
      <div className="navbar  bg-base-100">
        <div className="flex-none">
          <label htmlFor="my-drawer" className="btn-ghost drawer-button btn">
            <i className="material-icons mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </i>
          </label>
        </div>
        <div className="flex-1">
          <div className="btn-ghost btn text-xl normal-case">
            <Link href={`${"/" + router.query.id + "/dashboard"}`}>
              Jorip Jontro
            </Link>
          </div>
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown-end dropdown">
            <label tabIndex="0" className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Avatar className="h-10 w-10" {...config} />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow-sm shadow-primary-focus"
            >
              <li>
                <Link href={"/" + router.query.id + "/settings/profile"}>
                  Profile
                </Link>
              </li>
              <li>
                <Link href={"/" + router.query.id + "/settings"}>Settings</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
