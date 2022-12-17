import { Card } from "../../components/Card";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { useRouter } from "next/router";

// import dynamic from "next/dynamic";
// const SurveyForm = dynamic(
//   () => import("../components/SurveyForm/SurveyForm"),
//   { ssr: false } // <-- not including this component on server-side
// );

export default function Dashboard() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Navbar></Navbar>

      <div class="drawer h-min">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          {/* <!-- Page content here --> */}

          <div className=" flex flex-row flex-wrap justify-around">
            <Card
              title="Survey Studio"
              desc="Create a Form From the Survey Studio"
              link={`${"/" + router.query.id + "/survey-studio"}`}
              linktxt="GO"
            ></Card>

            <Card
              title="Browse Forms"
              desc="Browse through the survey forms"
              link={`${"/" + router.query.id + "/browse-forms"}`}
              linktxt="GO"
            ></Card>

            <Card
              title="Your Points"
              desc="Check your points"
              link={`${"/" + router.query.id + "/points"}`}
              linktxt="GO"
            ></Card>

            <Card
              title="View Profile"
              desc="Check your Profile"
              link={`${"/" + router.query.id + "/settings/profile"}`}
              linktxt="GO"
            ></Card>

            <Card
              title="External Forms"
              desc="Fill up external forms"
              link={`${"/" + router.query.id + "/browse-forms/external"}`}
              linktxt="GO"
            ></Card>

            <Card
              title="Add External Forms"
              desc="Add a new external form"
              link={`${"/" + router.query.id + "/add-external"}`}
              linktxt="GO"
            ></Card>
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
  data = data[0];
  console.log(values);
  return { props: { data } };
}
