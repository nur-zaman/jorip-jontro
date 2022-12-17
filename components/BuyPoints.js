import React, { useState } from "react";

import { useRouter } from "next/router";

async function updatePoint(userid, points, value, add) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    _id: userid,
    points: points,
    value: value,
    add: add,
  });

  let response = await fetch("http://localhost:3000/api/updateCoins", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
}

export default function BuyPoints(props) {
  const router = useRouter();
  const userid = router.query.id;
  const [points, setPoints] = useState(props.points);
  function addPoints(points, value) {
    let newPoint = points + value;
    setPoints(newPoint);

    updatePoint(userid, points, value, true);
  }

  return (
    <div>
      <label htmlFor="buy-modal" className="btn m-2 hover:bg-primary-focus">
        Buy Points
      </label>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="buy-modal" className="modal-toggle " />
      <label htmlFor="buy-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">Select Amount To Buy:</h3>
          <div className="flex justify-evenly py-4">
            <button
              className="btn hover:bg-primary-focus"
              onClick={() => addPoints(points, 100)}
            >
              100
            </button>
            <button
              className="btn hover:bg-primary-focus"
              onClick={() => addPoints(points, 500)}
            >
              500
            </button>
            <button
              className="btn hover:bg-primary-focus"
              onClick={() => addPoints(points, 1000)}
            >
              1000
            </button>
          </div>
          <div className="flex justify-center py-4 ">
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Your points</div>
                <div className="stat-value">{points}</div>
                {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
}
