import React from "react";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div className="h-screen md:h-[75vh] flex flex-col md:flex-row items-center">
      <div className=" w-full lg:w-1/2 flex  flex-col items-center lg:items-start justify-center">
        <h1 className=" text-4xl lg:text-6xl font-semibold text-yellow-100 text-center lg:text-left">
          Discover Your Next Great Book
        </h1>
        <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
          Uncover captivating stories and endless inspiration in our curated
          collection of books
        </p>
        <div className="mt-8 py-3">
          <Link to = "/all-books" className="text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full">
            Discover Books
          </Link>
        </div>
      </div>
      <div className=" md:w-full lg:w1/2 my-48 max-h-20 lg-h-[100%] flex items-center justify-center">
      <img src={require("../components/images/pngegg (3).png")} alt="hero image" className="w-4/6 h-[450px] "></img>
      </div>
    </div>
  );
};

export default Hero;
