import { Card } from "../components/Card";
import ExternalForm from "../components/SurveyForm/ExternalForm";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import SurveyForm from "../components/SurveyForm/SurveyForm";

import dynamic from "next/dynamic";
const SurveyForm = dynamic(
  () => import("../components/SurveyForm/SurveyForm"),
  { ssr: false } // <-- not including this component on server-side
);

export default function browseForms({ data }) {
  const forms = [];

  for (const [i, form] of data.entries()) {
    forms.push(
      <div className=" mx-36 mb-4 ">
        <SurveyForm data={form["data"]} />
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>

      <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}
          <Card></Card>
          <div className="flex-grow">
            {/* {console.log(data)} */}
            {/* <SurveyForm data={data} /> */}
            {forms}
            <ExternalForm></ExternalForm>
            <ExternalForm></ExternalForm>
            <ExternalForm></ExternalForm>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // Fetching data from an API
  const res = await fetch(`http://localhost:3000/api/fetch-survey`);
  const values = await res.json();
  // Pass the data to the page via props
  let data = values["data"];
  // data = data[0]["data"];
  // console.log(data);
  return { props: { data } };
}
