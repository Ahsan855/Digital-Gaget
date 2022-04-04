import React from "react";
import useReviwes from "../Reviwes/useReviwes";

const Reviwess = ({ reviwePd }) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-6 m-8 border-4 rounded-xl mb-10 bg-white">
      <h1 className="text-purple-500 text-2xl font-sans font-bold">Name: {reviwePd.name}</h1>
      <p className="text-xl w-full flex-wrap">{reviwePd.description}</p>
      <h2 className="text-3xl text-red-600">Ratting: {reviwePd.rating}</h2>
    </div>
  );
};

export default Reviwess;
