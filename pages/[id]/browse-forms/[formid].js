// import { Card } from "../../components/Card";
import { useRouter } from "next/router";
import ExternalForm from "../../../components/SurveyForm/ExternalForm";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";
// import SurveyForm from "../components/SurveyForm/SurveyForm";
import dynamic from "next/dynamic";

const SurveyForm = dynamic(
  () => import("../../../components/SurveyForm/SurveyForm"),
  { ssr: false } // <-- not including this component on server-side
);

export default function DetailedPage({ data }) {
  const forms = [];
  const router = useRouter();
  const formID = router.query.formid;
  console.log(formID);

  return (
    <>
      <Navbar></Navbar>

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}

          <div className="flex-grow">
            <SurveyForm data={data.fdata} />
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const formid = context.params.formid;
  console.log(formid);

  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    _id: formid,
  });

  let response = await fetch("http://localhost:3000/api/getForm", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  data = data["data"];
  console.log(data);
  return { props: { data } };
}