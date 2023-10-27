import React from "react";
import { Link } from "react-router-dom";

const Roadmap: React.FC = () => {
  return (
    <div className="pt-10">
      <h1 className="text-center font-bold heading1 text-[42px]">
        Roadmap
      </h1>
      <div className="design-section">
        <div className="timeline">
          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../arrays" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Arrays</h2>
          </Link>
          <Link to="../string" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Strings</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../linkedlist" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Linked List</h2>
          </Link>
          <Link to="../stack" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Searching Algorithms</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../queue" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Sorting Algorithms</h2>
          </Link>
          <Link to="../trees" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Divide and Conquer </h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../heap" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Stack</h2>
          </Link>
          <Link to="../hashing" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Queue</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../graph" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Tree</h2>
          </Link>
          <Link to="../matrix" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Graph</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../bitmanipulation" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Greedy Technique</h2>
          </Link>
          <Link to="../matrix" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Recursion</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../bitmanipulation" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Backtracking Algorithm</h2>
          </Link>
          <Link to="../matrix" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Dynamic Programming</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
          <div className="timeline-empty"></div>

          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../bitmanipulation" className=" timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Bit Manipulation</h2>
          </Link>
          <Link to="../matrix" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Math</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
