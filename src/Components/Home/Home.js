import React from "react";
import { Link } from "react-router-dom";
import useReviwes from "../Reviwes/useReviwes";
import Reviwess from "../Reviwess/Reviwess";
import "./Home.css";

const Home = () => {
  const [reviwe] = useReviwes();
  return (
    <div>
      <div className="md:px-16 py-8 grid md:grid-cols-2 sm:grid-cols-1 grid-rows-1 gap-3">
        <div className="flex flex-col justify-center h-[80vh] items-center">
          <h1 className=" font-mono text-xl md:text-5xl ">
            Welcome to My{" "}
            <span className="text-2xl font-mono md:text-6xl text-blue-500">
              Digital Gaget
            </span>
          </h1>
          <p className="w-4/5 text-gray-800 mt-3">
            This product is very beautiful and fashion full and the product is
            in demand. The product is just for you. Please use the product and
            review express. Thank you.
          </p>
          <button className="py-3 rounded-lg px-4 mt-4 bg-purple-500 text-white hover:bg-red-400 duration-500">
            Review Product
          </button>
        </div>
        <div>
          <img
            className="border-2 rounded-lg"
            src="https://images.unsplash.com/photo-1491472253230-a044054ca35f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="p-8 mt-4">
        <hr />
        <h1 className="text-4xl p-4 text-purple-500">
          Customers Reviwes : {reviwe.slice(0, 3).length}
        </h1>
        <hr />
      </div>
      <div className="p-5">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 grid-rows-1">
          {reviwe.slice(0, 3).map((reviwePd) => (
            <Reviwess reviwePd={reviwePd} key={reviwePd.id}></Reviwess>
          ))}
        </div>
        <div>
          <Link to="/reviwes">
            {" "}
            <button className="py-3 rounded-lg px-4 bg-purple-500 text-white hover:bg-red-400 duration-500">
              Show Reviwe
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
