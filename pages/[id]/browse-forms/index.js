import { useRouter } from "next/router";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";

export default function BrowseForms({ data }) {
  const router = useRouter();

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
          txt="Fill Up"
          url={`${router.asPath + "/" + form._id}`}
          download={""}
          hidden="hidden"
          points={form.points}
        />
      </div>
    );
  }

  return (
    <div className="">
      <Navbar></Navbar>

      <div class="drawer h-min ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-gray-900">
          {/* <!-- Page content here --> */}

          <div className="flex-grow pr-9">{forms}</div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </div>
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
