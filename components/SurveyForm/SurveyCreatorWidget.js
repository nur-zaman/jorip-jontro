import { useRouter } from "next/router";
import {
  SurveyCreatorComponent,
  SurveyCreator,
  StylesManager,
} from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

// StylesManager.applyTheme("defaultV2");
StylesManager.applyTheme("modern");

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: false,
  forceCompact: false,
};

export default function SurveyCreatorWidget(props) {
  let pt = props.points;
  console.log("points " + pt);
  const router = useRouter();
  const userID = router.query.id;
  const creator = new SurveyCreator(creatorOptions);
  creator.text =
    window.localStorage.getItem("survey-json") || JSON.stringify(defaultJson);
  creator.saveSurveyFunc = (saveNo, callback) => {
    window.localStorage.setItem("survey-json", creator.text);
    callback(saveNo, true);
    saveSurveyJson(
      "http://localhost:3000/api/add-form",
      creator.JSON,
      saveNo,
      callback,
      userID,
      pt
    );
  };
  return (
    <>
      <div className="form-control mb-4 ">
        <label className="input-group-xs input-group">
          <span>Reward</span>
          <input
            type="text"
            placeholder="Enter Reward amount"
            className="input-bordered input input-xs  hover:input-group-sm"
            id="rewardAmount"
            defaultValue={10}
          />
        </label>
      </div>
      {/* {console.log(userID)} */}
      <SurveyCreatorComponent creator={creator} />
    </>
  );
}
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
  console.log(data);
}

function saveSurveyJson(url, json, saveNo, callback, userID, pt) {
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.addEventListener("load", () => {
    callback(saveNo, true);
  });
  request.addEventListener("error", () => {
    callback(saveNo, false);
  });
  let coins = document.querySelector("#rewardAmount").value;
  json = {
    fdata: json,
    user: userID,
    points: coins,
  };

  updatePoint(userID, coins, pt, false);

  request.send(JSON.stringify(json));
}
