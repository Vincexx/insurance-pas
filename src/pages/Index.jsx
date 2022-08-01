import React from "react";
import gravitas from "../assets/img/gravitas.svg";

const Index = () => {
  return (
    <div className="h-screen mt-28 md:mt-0 md:flex items-center justify-between">
      <div className="md:w-1/2">
        <h1 className="font-extrabold text-6xl">
          Welcome to Automobile Insurance Policy and Claims System
        </h1>
        <p className="text-left my-3 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum
          consequuntur nihil rem modi tempora iusto, quisquam praesentium dolore
          voluptatum itaque nisi totam pariatur voluptates earum officiis amet
          reprehenderit ea.
        </p>
        <button className="bg-blue-500 font-bold text-white py-2 px-3 rounded">
          Learn More
        </button>
      </div>
      <div>
        <img src={gravitas} alt="gravitas" />
      </div>
    </div>
  );
};

export default Index;
