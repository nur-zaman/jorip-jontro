import { useRouter } from "next/router";

import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import { FormTitle } from "../../../components/FormTitle";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BrowseForms({ data }) {
  const router = useRouter();
  console.log(router);
  const forms = [];

  // for (const [i, form] of data.entries()) {
  //   forms.push(
  //     <div className=" mx-36 mb-4 ">
  //       <SurveyForm data={form["fdata"]} />
  //     </div>
  //   );
  // }

  const [search, setSearch] = useState();

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  for (const [i, form] of data.entries()) {
    if (Number(form.points) >= Number(search)) {
      forms.push(
        // <div className=" mx-36 mb-4 ">
        <div>
          <FormTitle
            title={form["fdata"].title}
            description={form["fdata"].description}
            txt="Fill Up"
            url={"/" + router.query.id + "/browse-forms/" + form._id}
            download={""}
            hidden="hidden"
            points={form.points}
          />
        </div>
      );
    }
  }

  return (
    <div className="">
      <Navbar></Navbar>

      <div class="drawer h-min ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-wrap justify-center scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-gray-900">
          {/* <!-- Page content here --> */}

          <div className="card m-7 w-full bg-gray-800 text-primary-content ">
            <div className="card-body">
              <h2 className="card-title">Search By Points</h2>

              <div className="card-actions  items-center justify-end px-6">
                <div className="text-3xl text-primary">
                  <input
                    className="input-bordered input-primary input w-full"
                    id="ext-form-url"
                    placeholder="Minimum Point"
                    value={search}
                    onChange={updateSearch}
                  ></input>
                </div>

                <Link
                  href={
                    "/" +
                    router.query.id +
                    "/browse-forms/search" +
                    "?s=" +
                    (search || "")
                  }
                >
                  <button className="btn">Search</button>
                </Link>
              </div>
            </div>
          </div>

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

  return { props: { data } };
}
