import { useRouter } from "next/router";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";
import Link from "next/link";
import fileDownload from "js-file-download";

export default function Myforms({ data }) {
  const router = useRouter();

  const forms = [];

  for (const [i, form] of data.entries()) {
    forms.push(
      <div>
        <FormTitle
          id={form._id}
          title={form["fdata"].title}
          description={form["fdata"].description}
          txt="View"
          url={`${router.asPath + "/" + form._id}`}
          download={"Download Response JSON"}
          hidden=""
        />
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>

      <div className="drawer h-min">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center ">
          {/* <!-- Page content here --> */}

          <div className="">{forms}</div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const userid = ctx.params.id;
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    user: userid,
  });

  let response = await fetch("http://localhost:3000/api/fetch-my-survey", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  const values = await response.json();
  // Pass the data to the page via props
  let data = values["data"];
  // data = data[0]["data"];
  console.log(data);
  return { props: { data } };
}
