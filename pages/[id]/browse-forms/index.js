// import { Card } from "../../components/Card";
import ExternalForm from "../../../components/SurveyForm/ExternalForm";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";
// import SurveyForm from "../components/SurveyForm/SurveyForm";
import dynamic from "next/dynamic";

export default function browseForms({ data }) {
  const forms = [];

  // for (const [i, form] of data.entries()) {
  //   forms.push(
  //     <div className=" mx-36 mb-4 ">
  //       <SurveyForm data={form["fdata"]} />
  //     </div>
  //   );
  // }

  for (const [i, form] of data.entries()) {
    forms.push(
      // <div className=" mx-36 mb-4 ">
      <div>
        <FormTitle
          title={form["fdata"].title}
          description={form["fdata"].description}
          id={form._id}
        />
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

          <div className="flex-grow">
            {/* <Card></Card> */}
            <FormTitle></FormTitle>
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
  console.log(data);
  return { props: { data } };
}