import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import fileDownload from "js-file-download";
import Image from "next/image";

async function addExternalForm(userid, url) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    user: userid,
    formurl: url,
  });

  let response = await fetch("http://localhost:3000/api/add-external", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();

  return data.success;
}

export const AddExternal = (props) => {
  const router = useRouter();
  const userid = router.query.id;

  return (
    <div className="card m-7 w-full flex-grow bg-gray-800 text-primary-content">
      <div className="card-body m-2">
        <h2 className="card-title justify-center">{"Add external form"}</h2>
      </div>

      <div className="card-body">
        <input
          className="input-bordered input-primary input w-full"
          placeholder="Survey Title"
        ></input>
        <input
          className="input-bordered input-primary input w-full"
          id="ext-form-url"
          placeholder="Survey URL"
        ></input>
        <textarea
          className="textarea-primary textarea"
          placeholder="Survey Description"
        ></textarea>

        <div className="card-actions  items-center justify-end px-6">
          <div
            className=" btn"
            onClick={() => {
              let url = document.querySelector("#ext-form-url").value;
              let success = addExternalForm(userid, url);
              if (success) {
                alert("Successfully Added");
              } else {
                alert("Failed to adds");
              }
            }}
          >
            ➕
          </div>
        </div>
      </div>
    </div>
  );
};
