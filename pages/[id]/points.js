import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import BuyPoints from "../../components/BuyPoints";
import { useRouter } from "next/router";
import Redeem from "../../components/Redeem";
import Image from "next/image";

export default function Points({ data }) {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <div className="drawer h-min">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center">
          {/* <!-- Page content here --> */}
          <div className=" h-fit justify-center  rounded-sm bg-base-200 p-4 ">
            <div className="flex flex-col items-center  ">
              <span>Your total points:</span>
              <span>
                <Image
                  src="/res/coin.gif"
                  alt="Coins"
                  width={20}
                  height={20}
                ></Image>
              </span>
              <span className=" rounded text-4xl transition-all hover:bg-primary-focus hover:text-5xl ">
                {data.coins}
              </span>
            </div>

            <div className="m-4 flex flex-col items-center ">
              <BuyPoints points={data.coins}></BuyPoints>
              <Redeem points={data.coins}></Redeem>
              <button
                className="btn"
                onClick={() => router.push(router.asPath)}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const userid = ctx.params.id;

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
