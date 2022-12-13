import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Card = (props) => {
  return (
    <div className="card m-7 w-min border border-gray-800 bg-gray-800 text-primary-content shadow-inner  hover:border-primary  hover:shadow-primary">
      <div className="m=5 card-body flex w-64 self-center">
        <h2 className="card-title ">{props.title}</h2>
        <p>{props.desc}</p>
        <div className="card-actions justify-center">
          <button className="btn-outline btn">
            <Link href={`${props.link}`}>{props.linktxt}</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
