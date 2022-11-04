import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import dynamic from "next/dynamic";

const SurveyCreatorWidget = dynamic(
  () => import("../components/SurveyForm/SurveyCreatorWidget"),
  { ssr: false } // <-- not including this component on server-side
);

export default function surveyStudio() {
  return (
    <>
      <Navbar></Navbar>

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}

          <SurveyCreatorWidget></SurveyCreatorWidget>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
