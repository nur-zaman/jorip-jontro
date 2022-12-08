import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content ">
          {/* <!-- Sidebar content here --> */}
          <li className="">
            <Link href={`${"/" + router.query.id + "/dashboard"}`}>
              <div className="hover:bg-primary-focus">
                <i className="material-icons">Home</i>
              </div>
            </Link>
          </li>
          <li>
            <Link href={`${"/" + router.query.id + "/my-forms"}`}>
              <div className="hover:bg-primary-focus">
                <i className="material-icons">My Forms</i>
              </div>
            </Link>
          </li>
          <li>
            <Link href={`${"/" + router.query.id + "/browse-forms"}`}>
              <div className="hover:bg-primary-focus">
                <i className="material-icons">Browse Forms</i>
              </div>
            </Link>
          </li>
          <li>
            <Link href={`${"/" + router.query.id + "/browse-forms/external"}`}>
              <div className="hover:bg-primary-focus">
                <i className="material-icons">External Forms</i>
              </div>
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={"/"}>
              <div className="text-error hover:bg-error hover:text-primary-content">
                <i className="material-icons">Sign Out</i>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
