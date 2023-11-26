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
          <Link to="../linkedlist" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">LinkedList</h2>
          </Link>

          <Link to="../searching" className="timeline-component timeline-content">
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
          <Link to="../sorting" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Sorting Algorithms</h2>
          </Link>

          <Link to="../stack" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Stack</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../queue" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Queue</h2>
          </Link>

          <Link to="../recursion" className="timeline-component timeline-content">
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
          <Link to="../divideandconquer" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Divide And Conquer</h2>
          </Link>

          <Link to="../trees" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Trees</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../graph" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Graphs</h2>
          </Link>

          <Link to="../heep" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Heep</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../dynamicprogramming" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Dynamic Programming</h2>
          </Link>

          <Link to="../backtracking" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Backtracking</h2>
          </Link>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <div className="timeline-empty"></div>

          <div className="timeline-empty"></div>
          <div className="timeline-middle">
            <div className="timeline-circle"></div>
          </div>
          <Link to="../greedy" className="timeline-component timeline-content">
            <h2 className="paragraph font-bold bg-transparent">Greedy Technique</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
