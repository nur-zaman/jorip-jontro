import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import BuyPoints from "../../components/BuyPoints";
import { useRouter } from "next/router";
import Redeem from "../../components/Redeem";
import Image from "next/image";
import { FormStat } from "../../components/Stats/FormStat";
import { ExternalvsCustom } from "../../components/Stats/ExternalvsCustom";

export default function stats({ data }) {
  //   const router = useRouter();
  return (
    <>
      <Navbar />

      <div className="drawer h-min">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center">
          {/* <!-- Page content here --> */}
          {console.log(data)}
          <FormStat posted={data.posted} submitted={data.submitted}></FormStat>
          <ExternalvsCustom
            external={data.external}
            custom={data.posted}
          ></ExternalvsCustom>
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

  const postedData = await response.json();

  let posted = postedData["data"];

  let response2 = await fetch(
    "http://localhost:3000/api/fetch-response-withUserID",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const submittedData = await response2.json();

  let submitted = submittedData;

  let response3 = await fetch(
    "http://localhost:3000/api/fetch-external-withUserID",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    }
  );

  const externalData = await response3.json();
  let external = externalData;
  const data = {
    posted: posted.length,
    submitted: submitted.length,
    external: external.length,
  };
  console.log(data);
  return { props: { data } };
}
