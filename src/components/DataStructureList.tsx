import React from "react";
import DataStructureComponent from "./DataStructureComponent";
import {Link} from "react-router-dom"

// created list of data structures
// needed to link them with thier repected page to view
// needed to order them in proper order

const DataStructures: React.FC = () => {
  return (
    <div id="datastructures" className="mt-[60px]">

      <h1 className="heading2">
        <span className="" style={{ textDecorationColor: "#00cfba" }}>
          Data
        </span>{" "}
        <span style={{ color: "#00cfba" }}>Structures</span>
      </h1>

      <div className="rounded flex justify-around flex-wrap">
        <Link to="arrays"><DataStructureComponent name="Arrays" /></Link>
        <Link to="string"><DataStructureComponent name="Strings" /></Link>
        <Link to="linkedlist"><DataStructureComponent name="LinkedList" /></Link>
        <Link to="stack"><DataStructureComponent name="Stack" /></Link>
        <Link to="queue"><DataStructureComponent name="Queue" /></Link>
        <Link to="trees"><DataStructureComponent name="Trees" /></Link>
        <Link to="heep"><DataStructureComponent name="Heep" /></Link>
        <Link to="graph"><DataStructureComponent name="Graph" /></Link>
        {/* <Link to="matrix"><DataStructureComponent name="matrix" /></Link> */}
        {/* <Link to="bitmanipulation"><DataStructureComponent name="Bit Manipulation" /></Link> */}
        {/* <Link to="math"><DataStructureComponent name="Math" /></Link> */}
      </div>
    </div>
  );
};

export default DataStructures;
