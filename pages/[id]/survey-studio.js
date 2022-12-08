import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import dynamic from "next/dynamic";
import { data } from "autoprefixer";

const SurveyCreatorWidget = dynamic(
  () => import("../../components/SurveyForm/SurveyCreatorWidget"),
  { ssr: false } // <-- not including this component on server-side
);

export default function surveyStudio({ data }) {
  return (
    <>
      <Navbar></Navbar>

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}

          <SurveyCreatorWidget points={data.coins}></SurveyCreatorWidget>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const userid = ctx.params.id;
  console.log(userid);
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
