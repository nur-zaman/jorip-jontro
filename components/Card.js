import React from "react";

export const Card = () => {
  return (
    <div className="card m-7 w-80 bg-gray-800 text-primary-content ">
      <div className="card-body">
        <h2 className="card-title">Card title!</h2>
        <p>DUMB TEXT</p>
        <div className="card-actions justify-center">
          <button className="btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};
