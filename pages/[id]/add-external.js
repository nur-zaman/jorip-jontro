import { AddExternal } from "../../components/SurveyForm/AddExternal";

import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export default function Myforms() {
  const router = useRouter();

  return (
    <>
      <Navbar></Navbar>

      <div className="drawer h-min">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  flex-wrap justify-center ">
          {/* <!-- Page content here --> */}

          <AddExternal></AddExternal>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
