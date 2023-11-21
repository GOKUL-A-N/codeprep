import React from "react";
import Navbar from "../components/Navbar";
import { blogs } from "../constants/blogContents";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-[#00cfba] text-8xl text-center mt-24">Developer Blog</h1>
      <h2 className="text-[#63727b] text-4xl text-center">
        Developer resources & insights from the Codewars team and our partners
      </h2>
      <div className="text-white text-center text-2xl space-x-10">
        <button className="border border-[#63727b] rounded-full p-4 bg-[#63727b]">
          Career Insights
        </button>
        <button className="border border-[#63727b] rounded-full p-4 bg-[#63727b]">
          Programming
        </button>
      </div>
    </div>
  );
};

export default Blogs;
