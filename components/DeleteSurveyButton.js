import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";

async function deleteData(id, external) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    _id: id,
  });
  if (!external) {
    await fetch("http://localhost:3000/api/delete-form", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  } else {
    await fetch("http://localhost:3000/api/delete-external", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });
  }

  Router.reload(window.location.pathname);
}

export default function DeleteSurveyButton(props) {
  return (
    <button
      className={" btn hover:bg-error " + props.visiblity}
      onClick={() => {
        deleteData(props.id, false);
      }}
    >
      DELETE
    </button>
  );
}
