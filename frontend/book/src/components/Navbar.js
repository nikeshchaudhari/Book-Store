import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGripLines } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About us",
      link: "/about-us",
    },
    {
      title: "All books",
      link: "/all-books",
    },
    {
      title: "cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
  ];
  const [Mobile, setMobile] = useState("hidden");

  return (
    <>
      <nav className=" z-50 relative bg-zinc-800 text-white px-4 py-5 flex justify-between">
        <Link to="/">
          <h1 className="text-xl font-semibold">Book Store</h1>
        </Link>
        <div className="nav-link-book block md:flex items-center gap-5">
          <div className="hidden md:flex gap-5">
            {links.map((items, i) => (
              <Link
                to={items.link}
                className="hover:text-blue-400 transition-all duration-500 cursor-pointer"
                key={i}
              >
                {items.title}{" "}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="./Login"
              className="px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-black transition-all duration-500"
            >
              Login
            </Link>
            <Link
              to="./SignUp"
              className="px-4 py-1   bg-blue-500 text-white rounded hover:bg-white hover:text-black"
            >
              SignUp
            </Link>
          </div>
          <button
            className= " block  md:hidden to-white text-2xl hover:text-zinc-400  mr-5 "
            onClick={() => {
              if (Mobile === "hidden") {
                setMobile("block");
              } else {
                setMobile("hidden");
              }
            }}
          >
            <FaGripLines />
          </button>
        </div>
      </nav>
      <div
        className={`${Mobile}  bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
      >
        {links.map((items, i) => (
          <Link
            to={items.link}
            className="text-white text-xl hover:text-blue-500 mb-4 font-semibold transition-all duration-500 cursor-pointer"
            key={i}
            onClick={() => {
              if (Mobile === "hidden") {
                setMobile("block");
              } else {
                setMobile("hidden");
              }
            }}
          >
            {items.title}
          </Link>
        ))}

        <Link
          to="./Login"
          className="px-8 py-2 mb-4 text-xl font-semibold border border-blue-500 rounded text-white hover:bg-white hover:text-black transition-all duration-500"
        >
          Login
        </Link>
        <Link
          to="./SignUp"
          className="px-8 py-2  text-xl  font-semiboldborder bg-blue-500 text-white rounded hover:bg-white hover:text-black"
        >
          SignUp
        </Link>
      </div>
    </>
  );
};

export default Navbar;
