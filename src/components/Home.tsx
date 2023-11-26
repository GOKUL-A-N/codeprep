import React from "react";
import homeimg from "../assets/images/homeimg.png";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    // created home page with default text and button to get started
    // needed to add a background image
    // link the button to the data structures page
    <div>
      <div className="h-screen flex flex-row items-center justify-between p-3 sm:p-0">
      <div className="flex flex-col justify-center items-start">
        <h3 className="heading2">A complete DSA guide</h3>
        {/* <h1 className='heading1'>The lead to become <br className='sm:hidden' /> a <span className='important font-[34px] sm:text-[68px]'>10x Programmer </span></h1> */}
        <h1 className="heading1">
          Personalised Platform to make <br />
          <span style={{ color: "#00cfba" }}>coding</span> easier for you
        </h1>
        <h4 className="heading2">Start from scratch, Build up expertise ✨</h4>
        <a
          href="#datastructures"
          className="paragraph hover:opacity-75 hover:duration-300 px-5"
        >
          <button className="third mt-14 sm:ml-[5px] rounded">
            <span className="font-semibold bg-transparent ">Join The Movement</span>
          </button>
        </a>
      </div>
      <div className="hidden sm:block animate-pulse">
        <img src={homeimg} alt="homeimg" />
      </div>
      {/* What is datastructure */}
      
    </div>
    <div className="neumorphism-Box p-8">
    <h1 className="important bg-transparent">Data Structure</h1><br />
    <p className="paragraph bg-transparent">A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures.<Link to="/datastructure" className="underline">Learn more.</Link> </p>
  </div>
  <br />
  <div className="neumorphism-Box p-8">
    <h1 className="important bg-transparent">Algorithms</h1><br />
    <p className="paragraph bg-transparent">The word Algorithm means ” A set of finite rules or instructions to be followed in calculations or other problem-solving operations ”
Or
” A procedure for solving a mathematical problem in a finite number of steps that frequently involves recursive operations”.<Link to="/algorithms" className="underline">Learn more.</Link> </p>
  </div><br />
  <div className="neumorphism-Box p-8">
    <h1 className="important bg-transparent">Time Complexity</h1><br />
    <p className="paragraph bg-transparent">Time complexity is the amount of time it takes for an algorithm to run. It's a type of computational complexity that describes the time required to execute an algorithm. 
Time complexity is highly dependent on the size of the processed data. It measures the time taken to execute each statement of code in an algorithm. It does not examine the total execution time of an algorithm. </p>
  </div><br />
  <div className="neumorphism-Box p-8">
    <h1 className="important bg-transparent">Space Complexity</h1><br />
    <p className="paragraph bg-transparent">Space complexity is the amount of memory space an algorithm or problem uses to execute. It includes the space used by variables in the problem or algorithm, as well as the space for input values. 
Space complexity is expressed in terms of the size of the input. It refers to the amount of memory storage required to execute the algorithm and solve a problem. </p>
  </div>
    </div>
  );
};

export default Home;
