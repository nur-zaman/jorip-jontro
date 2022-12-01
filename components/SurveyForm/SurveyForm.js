import React from "react";
import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import { GetServerSidePropsContext } from "next";

StylesManager.applyTheme("defaultV2");

const surveyJson = {
  logoPosition: "right",
  pages: [
    {
      name: "Name",
      elements: [
        {
          type: "text",
          name: "FirstName",
          title: "Helloooo name?13",
        },
        {
          type: "text",
          name: "LastName",
          title: "Enter your last name:",
        },
        {
          type: "text",
          name: "question1",
          title: "NO B?",
        },
      ],
    },
  ],
};

//   const callfetchSurvey = async () => {
// 	try {
// 		const res = await fetch(`http://localhost:3000/api/fetch-survey`);
// 		let data = await res.json();
//        data = data['data']
//        data = data[0]
// 		console.log(data);
//         return data
// 	} catch (err) {
// 		console.log(err);
// 	}

// };

// console.log(callfetchSurvey)

function SurveyForm(props) {
  // const testCall = callfetchSurvey()
  // console.log(testCall['data'])
  console.log(props);

  // const survey = new Model(surveyJson);
  const survey = new Model(props.data);
  survey.focusFirstQuestionAutomatic = false;

  // const alertResults = useCallback((sender) => {
  //   const results = JSON.stringify(sender.data);
  //   alert(results);
  // }, []);

  survey.onComplete.add(function (sender) {
    console.log(sender.data);
  });
  // survey.getSurveyData

  return <Survey model={survey} />;
}

export default SurveyForm;
