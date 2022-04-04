import React from "react";
import useReviwes from "../Reviwes/useReviwes";
import Reviwess from "../Reviwess/Reviwess";

const Reviwes = () => {
  const [reviwe] = useReviwes();

  return (
    <div className="p-5">
      <h1 className="text-center pb-5 pt-2 text-6xl text-red-600"> All Favorite Customers Reviwes</h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-4 m-8 border-4 rounded-xl mb-10 bg-gray-200">
        {reviwe.map((reviwePd) => (
          <Reviwess reviwePd={reviwePd} key={reviwePd.id}></Reviwess>
        ))}
      </div>
    </div>
  );
};

export default Reviwes;
