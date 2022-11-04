// import { useState } from "react";
// import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
// // Import stylesheets for SurveyJS Library and Survey Creator
// import "survey-core/defaultV2.min.css";
// import "survey-creator-core/survey-creator-core.min.css";

// export default function SurveyCreatorWidget(props) {
//   const [creator, setCreator] = useState(null);
//   if (!creator) {
//     // Create a Survey Creator instance
//     const creator = new SurveyCreator({ showLogicTab: true });
//     setCreator(creator);
//   }
//   const style = { height: "100vh" };
//   return (
//     <div>
//       <SurveyCreatorComponent creator={creator}></SurveyCreatorComponent>
//     </div>
//   );
// }

import { SurveyCreatorComponent, SurveyCreator } from "survey-creator-react";
import "survey-core/defaultV2.min.css";
import "survey-creator-core/survey-creator-core.min.css";

const creatorOptions = {
  showLogicTab: false,
  isAutoSave: false,
};

const defaultJson = {
  pages: [
    {
      name: "Name",
      elements: [
        {
          name: "FirstName",
          title: "Enter your first name:",
          type: "text",
        },
        {
          name: "LastName",
          title: "Enter your last name:",
          type: "text",
        },
      ],
    },
  ],
};

export default function SurveyCreatorWidget() {
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
      callback
    );
  };
  return <SurveyCreatorComponent creator={creator} />;
}

function saveSurveyJson(url, json, saveNo, callback) {
  const request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.addEventListener("load", () => {
    callback(saveNo, true);
  });
  request.addEventListener("error", () => {
    callback(saveNo, false);
  });
  json = {
    data: json,
  };
  console.log(json);
  request.send(JSON.stringify(json));
}
