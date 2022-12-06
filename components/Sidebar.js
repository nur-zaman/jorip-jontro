import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  return (
    <>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu w-80 overflow-y-auto bg-base-100 p-4 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href={`${"/" + router.query.id + "/dashboard"}`}>
              <div>
                <i className="material-icons">Home</i>
              </div>
            </Link>
          </li>
          <li>
            <Link href={`${"/" + router.query.id + "/my-forms"}`}>
              <div>
                <i className="material-icons">My Forms</i>
              </div>
            </Link>
          </li>
          <li>
            <Link href={`${"/" + router.query.id + "/browse-forms"}`}>
              <div>
                <i className="material-icons">Browse Forms</i>
              </div>
            </Link>
          </li>
          <div className="divider"></div>
          <li>
            <Link href={"/"}>
              <div className="text-error">
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
