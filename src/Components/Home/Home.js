import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="md:px-16 py-8 flex gap-3">
      <div className="flex flex-col justify-center h-[80vh] items-center">
        <h1 className=" font-mono text-xl md:text-5xl ">
          Welcome to My{" "}
          <span className="text-2xl font-mono md:text-6xl text-blue-500">
            Digital Gaget
          </span>
        </h1>
        <p className="w-4/5 text-gray-800 mt-3">This product is very beautiful and fashion full and the product is in demand. The product is just for you. Please use the product and review express. Thank you.</p>
        <button className="py-2 px-3 text-white mt-3 rounded-full bg-cyan-600">
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
  );
};

export default Home;
