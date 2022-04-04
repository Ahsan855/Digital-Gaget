import React from "react";

const Reviwess = ({ reviwePd }) => {
  const { name, img, rating, description } = reviwePd;
  return (
    <div className="grid grid-cols-1 gap-4 p-6 m-8 border-4 rounded-xl mb-10 bg-white">
      <img className="w-3/6 h-auto rounded-3xl mx-auto" src={img} alt="" />
      <h1 className="text-purple-500 text-2xl font-sans font-bold">
        Name: {name}
      </h1>
      <p className="text-xl w-full flex-wrap">{description}</p>
      <h2 className="text-3xl text-red-600">Rating: {rating}</h2>
    </div>
  );
};

export default Reviwess;
