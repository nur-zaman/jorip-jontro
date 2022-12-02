import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

export const FormTitle = (props) => {
  const router = useRouter();

  return (
    <div className="card m-7 w-full bg-gray-800 text-primary-content ">
      <div className="card-body">
        <h2 className="card-title">{props.title || "No Survey Title"}</h2>
        <p>{props.description || "No Survey Description"}</p>
        <div className="card-actions  justify-end px-6">
          <button className="btn">
            <Link href={`${router.asPath + "/" + props.id}`}>Fill UP</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
