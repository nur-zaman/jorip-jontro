import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import BuyPoints from "../../components/BuyPoints";
export default function points({ data }) {
  return (
    <>
      <Navbar />

      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-wrap justify-center">
          {/* <!-- Page content here --> */}
          <div className=" h-fit justify-center  rounded-sm bg-base-200 p-4 ">
            <div className="flex flex-col items-center  ">
              <span>Your total points:</span>
              <span>100</span>
            </div>

            <div className="m-4 flex flex-col items-center ">
              <BuyPoints points={data.points}></BuyPoints>

              <label htmlFor="redeem-modal" className="btn">
                open modal
              </label>

              <input
                type="checkbox"
                id="redeem-modal"
                className="modal-toggle"
              />
              <label htmlFor="redeem-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                  <h3 className="text-lg font-bold">
                    Congratulations random Internet user!
                  </h3>
                  <div className="py-4">aaa</div>
                </label>
              </label>
            </div>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  const bodyContent = JSON.stringify({
    email: "good",
  });

  // const response = await fetch("http://localhost:3000/api/add-points", {
  //   method: "POST",
  //   body: bodyContent,
  //   headers: headersList,
  // });

  // const result = await response.json();
  // const data = result.data;
  const data = { points: 100 };

  return { props: { data } };
}
