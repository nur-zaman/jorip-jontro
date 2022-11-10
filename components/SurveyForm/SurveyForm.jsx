import React from 'react'
import { useCallback } from "react";

import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

StylesManager.applyTheme("defaultV2");

const surveyJson =  {
  "logoPosition": "right",
  "pages": [
    {
      "name": "Name",
      "elements": [
        {
          "type": "text",
          "name": "FirstName",
          "title": "Helloooo name?13"
        },
        {
          "type": "text",
          "name": "LastName",
          "title": "Enter your last name:"
        },
        {
          "type": "text",
          "name": "question1",
          "title": "NO B?"
        }
      ]
    }
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



function SurveyForm() {
    // const testCall = callfetchSurvey()
    // console.log(testCall['data'])
    const survey = new Model(surveyJson);
    survey.focusFirstQuestionAutomatic = false;
  
    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);
    }, []);
  
    survey.onComplete.add(alertResults);
  
    return <Survey model={survey} />;
}

export default SurveyForm