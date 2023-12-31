import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
// import { blogs } from "../constants/blogContents";
import { Link } from "react-router-dom";
import axios from "axios";


const Blogs = () => {




  const [content,setContent] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/blogs").then((response) => {
        setContent(response.data.data);
        console.log(response.data);
    })
    .catch((error) => {
        console.log(error.message);
    })
},[]);




  return (
    <div className="space-y-12 mb-10">
      <div className="p-10">
        <Navbar />
      </div>
      <h1 className="text-[#00cfba] text-8xl text-center mt-24">Developer Blog</h1>
      <h2 className="text-[#63727b] text-4xl text-center">
        Developer resources & insights from the CodePrep team and you
      </h2>
      <div className="text-white text-center text-2xl space-x-10">
        <button className="border border-[#63727b] rounded-full p-4 bg-[#63727b]">
          Career Insights
        </button>
        <button className="border border-[#63727b] rounded-full p-4 bg-[#63727b]">
          Programming
        </button>
      </div>
      <div className="relative">
        {
          content.map((content) => 
          (
            <div className="pl-5 flex flex-col items-center mt-6" key={content._id}>
            <div className="p-10 mb-20 w-[85%] relative rounded-sm border-2 border-emerald-900 flex flex-col">
              <div className="bg-transparent"></div>
              <br />
              <div className="bg-transparent p-6">
                <p className="bg-transparent paragraph">{content.description}</p>
              </div>
              <div className="">
                {/* <h6 className="absolute top-2 right-10 bg-transparent text-white text-[25px] font-semibold">
                  Posted on : {new Date(content.createdAt()).toString()}
                </h6> */}
                <h6 className="heading2 absolute bottom-2 right-10">-{content.author}</h6>
              </div>
            </div>
        </div>
          )
          )
        }
        <Link
          to="/createblog"
          className="fixed right-5 bottom-5 flex rounded p-3 bg-slate-800"
        >
          <h6 className="important bg-transparent ">Create </h6>
          <button className="p-4 ml-4 rounded-full" style={{ backgroundColor: "#00CFBA" }}>
            {" "}
            ➕
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
