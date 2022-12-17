import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function ExternalvsCustom(props) {
  const data = {
    labels: ["External", "Custom"],
    datasets: [
      {
        label: "# External vs Custom ",
        data: [props.external, props.custom],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="card m-7 w-min border border-gray-800 bg-gray-800 text-primary-content shadow-inner  hover:border-primary  hover:shadow-primary">
      <div className="m=5 card-body flex w-64 self-center">
        <h2 className="card-title ">External Forms vs Custom Forms Chart</h2>
        <Doughnut data={data} />
      </div>
    </div>
  );
}
