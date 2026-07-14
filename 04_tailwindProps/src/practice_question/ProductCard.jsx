import React from "react";

function ProductCard({ imgSrc, title, description, isAvailable }) {

  return (

    <div className="bg-zinc-800 max-w-sm rounded-xl" >
      <img className="rounded-t-xl" src={imgSrc} alt="testing" />

      <div className="p-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-gray-300">{description}</p>
        <p className={isAvailable ? 'bg-green-800 rounded-xl text-white font-medium pl-2 pr-2 inline-block' : 'bg-red-700 rounded-xl text-white font-medium pl-2 pr-2 inline-block'}> {isAvailable ? 'In Stock' : 'Out Of Stock'}</p>
      </div>

    </div >

  )

}

export default ProductCard;
