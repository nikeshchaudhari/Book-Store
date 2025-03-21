import React from "react";
import { Link } from "react-router-dom";

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
  return (
    <div className="bg-zinc-800 text-white px-4 py-3 flex justify-between">
      <div>
        <h1 className="text-xl font-semibold">Book Store</h1>
      </div>
      <div >
        <div className="nav-link-book flex gap-5">
        {links.map((items,i)=>(
          <div className="hover:text-blue-400 transition-all duration-500 cursor-pointer" key={i}>{items.title}</div>
        ))}
        </div>
       <div className="flex gap-4">
        <button className="px-4 py-1 border border-blue-500">Login</button>
        <button className= "px-4 py-1 bg-white text-black rounded">SignUp</button>
       </div>
      </div>
    </div>
  );
};

export default Navbar;
