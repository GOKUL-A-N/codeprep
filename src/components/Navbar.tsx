import React from "react";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-7 sm:top-12 z-10">
      <div className="flex justify-between items-center px-3 sm:p-0">
        <a href=""><h1 className="important text-xl">CodePrep</h1></a>
        <button
          id="mobile-open-button"
          className="sm:hidden focus:outline-none text-3xl text-slate-400 "
        >
          &#9776;
        </button>
        <div className="hidden sm:inline">
          <Link to="../datastructure"
            className="paragraph hover:opacity-75 hover:duration-300 px-5"
          >
            Data Structures
          </Link>
          <Link to="../algorithms" className="paragraph hover:opacity-75 hover:duration-300 px-5">
            Algorithms
          </Link>
          <Link to="../blogs" className="paragraph hover:opacity-75 hover:duration-300 px-5">
            Blogs
          </Link>
          <Link to="../roadmap" className="paragraph hover:opacity-75 hover:duration-300 px-5">
            Roadmap
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
