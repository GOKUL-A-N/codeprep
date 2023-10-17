import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-7 sm:top-12 z-10">
      <div className="flex justify-between items-center px-3 sm:p-0">
        <h1 className="important text-xl">Code Prep</h1>
        <button
          id="mobile-open-button"
          className="sm:hidden focus:outline-none text-3xl text-slate-400 "
        >
          &#9776;
        </button>
        <div className="hidden sm:inline">
          <a
            href="#datastructures"
            className="paragraph hover:opacity-75 hover:duration-300 px-5"
          >
            Data Structures
          </a>
          <a href="" className="paragraph hover:opacity-75 hover:duration-300 px-5">
            Practice
          </a>
          <a href="" className="paragraph hover:opacity-75 hover:duration-300 px-5">
            Roadmap
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
