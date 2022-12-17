import React from "react";
import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

StylesManager.applyTheme("defaultV2");

async function saveFormData(response_data, formID, userID, value) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let usertag = JSON.stringify({
    _id: userID,
  });

  const userData = await fetch("http://localhost:3000/api/getProfile", {
    method: "POST",
    body: usertag,
    headers: headersList,
  });

  let userdataJSON = await userData.json();
  let points = userdataJSON.data.coins;

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

  let addForm = await response.text();

  updatePoint(userID, points, value, true);
}

async function updatePoint(userid, points, value, add) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let update = JSON.stringify({
    _id: userid,
    points: points,
    value: value,
    add: add,
  });

  let getCoin = JSON.stringify({
    _id: userid,
  });

  let response = await fetch("http://localhost:3000/api/updateCoins", {
    method: "POST",
    body: update,
    headers: headersList,
  });

  let data = await response.text();
}

function SurveyForm(props) {
  const router = useRouter();

  const userID = router.query.id;
  const formID = router.query.formid;

  const survey = new Model(props.data.fdata);
  survey.focusFirstQuestionAutomatic = false;

  // const alertResults = useCallback((sender) => {
  //   const results = JSON.stringify(sender.data);
  //   alert(results);
  // }, []);

  survey.onComplete.add(function (sender) {
    saveFormData(sender.data, formID, userID, Number(props.data.points));
  });
  // survey.getSurveyData

  return <Survey model={survey} />;
}

export default SurveyForm;
