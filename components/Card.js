import React from 'react'

export const Card = () => {
  return (
<div className="card w-80 text-primary-content m-7 bg-gray-800 ">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-center">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
  )
}
