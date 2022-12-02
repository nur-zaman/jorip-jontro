import Avatar from "react-nice-avatar";
import Link from "next/link";

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
  return (
    <>
      <div className="navbar bg-base-100">
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
          <a className="btn-ghost btn text-xl normal-case">Jorip Jontro</a>
        </div>

        <div className="flex-none gap-2">
          <button className="btn-ghost btn-circle btn">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge-primary badge badge-xs indicator-item"></span>
            </div>
          </button>
          <div className="dropdown-end dropdown">
            <label tabIndex="0" className="btn-ghost btn-circle avatar btn">
              <div className="w-10 rounded-full">
                <Avatar className="h-10 w-10" {...config} />
              </div>
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                {" "}
                <Link href="/">Logout</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
