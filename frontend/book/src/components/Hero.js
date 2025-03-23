import React from "react";

const Hero = () => {
  return (
    <div className="h-[75vh] flex">
      <div className=" w-full lg:w-1/2 flex  flex-col items-center lg:items-start justify-center">
        <h1 className=" text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Discover Your Next Great Book
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Uncover captivating stories and endless inspiration in our curated
          collection of books
        </p>
        <div className="mt-8 py-3">
          <button className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full">
            Discover Books
          </button>
        </div>
      </div>
      <div className="w-full lg:w1/2">
      <img src={require("../components/images/1.jpeg")} alt="hero image" className="w-4/6 h-[450px] ml-52"></img>
      </div>
    </div>
  );
};

export default Hero;
