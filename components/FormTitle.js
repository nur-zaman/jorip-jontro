import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import fileDownload from "js-file-download";
import Image from "next/image";

async function handleDownload(formID, filename) {
  let headersList = {
    Accept: "*/*",
    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    formID: formID,
  });

  let response = await fetch("http://localhost:3000/api/fetch-response", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.text().then((data) => {
    fileDownload(data, filename);
  });
}

export const FormTitle = (props) => {
  const router = useRouter();

  return (
    <div className="card m-7 w-full bg-gray-800 text-primary-content ">
      <div className="card-body">
        <h2 className="card-title">{props.title || "No Survey Title"}</h2>
        <p>{props.description || "No Survey Description"}</p>
        <div className="card-actions  items-center justify-end px-6">
          <button
            className={`${"btn " + props.hidden}`}
            onClick={() => {
              handleDownload(props.id, props.title + "-" + props.id + ".json");
            }}
          >
            {props.download}
          </button>
          <div className="text-3xl text-primary">
            {props.points || 0}
            {"  "}
            <span>
              <Image
                src="/res/coin.gif"
                alt="Coins"
                width={20}
                height={20}
              ></Image>
            </span>
          </div>
          <button className="btn">
            <Link href={props.url}>{props.txt}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
