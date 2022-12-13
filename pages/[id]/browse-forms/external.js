import { useRouter } from "next/router";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";
import Link from "next/link";
import fileDownload from "js-file-download";
import ExternalForm from "../../../components/SurveyForm/ExternalForm";

export default function Myforms({ data }) {
  const router = useRouter();

  const eforms = [];
  console.log(data);
  data.forEach((form) => {
    eforms.push(
      <div>
        <ExternalForm id={form._id} link={form.formurl}></ExternalForm>
      </div>
    );
  });

  // for (const form in data.forms) {
  //   eforms.push(
  //     <div>
  //       <ExternalForm link={form.formurl}></ExternalForm>
  //     </div>
  //   );
  // }

  return (
    <>
      <Navbar></Navbar>

      <div className="drawer h-min">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-center ">
          {/* <!-- Page content here --> */}

          {/* <div className="flex flex-grow flex-col"> */}
          {eforms}
          {/* <ExternalForm link={data.formurl}></ExternalForm>
            <ExternalForm link={data.formurl}></ExternalForm> */}
          {/* </div> */}
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
  };

  let response = await fetch("http://localhost:3000/api/fetch-external", {
    method: "GET",
    headers: headersList,
  });

  let value = await response.json();
  let data = value.forms;

  return { props: { data } };
}
