import React from "react";
import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

StylesManager.applyTheme("defaultV2");

async function saveFormData(response_data, formID, userID) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    response: response_data,
    formID: formID,
    userID: userID,
  });

  let response = await fetch("http://localhost:3000/api/save-form-data", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text();
  console.log(data);
}

function SurveyForm(props) {
  const router = useRouter();

  // console.log(router);

  // console.log(props);
  const userID = router.query.id;
  const formID = router.query.formid;

  const survey = new Model(props.data);
  survey.focusFirstQuestionAutomatic = false;

  // const alertResults = useCallback((sender) => {
  //   const results = JSON.stringify(sender.data);
  //   alert(results);
  // }, []);

  survey.onComplete.add(function (sender) {
    console.log(sender.data);
    saveFormData(sender.data, formID, userID);
  });
  // survey.getSurveyData

  return <Survey model={survey} />;
}

export default SurveyForm;
