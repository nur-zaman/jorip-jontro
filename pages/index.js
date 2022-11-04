import Login from "../components/Login";
// import { SurveyCreatorWidget } from "../components/SurveyForm/SurveyCreatorWidget";

import dynamic from "next/dynamic";

const SurveyCreatorWidget = dynamic(
  () => import("../components/SurveyForm/SurveyCreatorWidget"),
  { ssr: false } // <-- not including this component on server-side
);

export default function Home() {
  return (
    <Login></Login>
    // <SurveyCreatorWidget></SurveyCreatorWidget>
  );
}
