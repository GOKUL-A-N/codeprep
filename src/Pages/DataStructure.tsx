import React from "react";
import classification from "../assets/images/Classification.png";
import DataStructureList from "../components/DataStructureList";

const DataStructure:React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] mx-auto mb-24">
      <h1 className="heading1">DataStructure</h1>
      <br />

      <h3 className="text-white text-[32px]">What is Data Structure?</h3>
      <br />
      <p className="paragraph">
        "A data structure is a storage that is used to store and organize data.
        It is a way of arranging data on a computer so that it can be accessed
        and updated efficiently."
      </p>
      <br />
      <p className="paragraph">
        A data structure is not only used for organizing the data. It is also
        used for processing, retrieving, and storing data. There are different
        basic and advanced types of data structures that are used in almost
        every program or software system that has been developed. So we must
        have good knowledge about data structures.{" "}
      </p>
      <br />
      <h6 className="text-[30px] text-white font-semibold">
        Classification Of DataStructure
      </h6>
      <br />
      <img src={classification} alt="" />
      <br />
      <div>
        <h4 className="heading2">Linear Data Structure</h4>
        <br />
        <p className="paragraph">
          Data structure in which data elements are arranged sequentially or
          linearly, where each element is attached to its previous and next
          adjacent elements, is called a linear data structure. Examples of
          linear data structures are array, stack, queue, linked list, etc.
        </p>
        <div className="">
          <h6 className="heading2 pl-6">→Static Data Structure</h6>
          <br />
          <p className="paragraph pl-6">
            Static data structure has a fixed memory size. It is easier to
            access the elements in a static data structure. An example of this
            data structure is an array.
          </p>
          <br />
        </div>
        <div className="">
          <h6 className="heading2 pl-6">→Dynamic Data Structure</h6>
          <br />
          <p className="paragraph pl-6">
            {" "}
            In dynamic data structure, the size is not fixed. It can be randomly
            updated during the runtime which may be considered efficient
            concerning the memory (space) complexity of the code. Examples of
            this data structure are queue, stack, etc.
          </p>
          <br />
        </div>
      </div>
      <h4 className="heading2">Non Linear Data Structure</h4>
      <br />
      <p className="paragraph">
        Data structures where data elements are not placed sequentially or
        linearly are called non-linear data structures. In a non-linear data
        structure, we can’t traverse all the elements in a single run only.
        Examples of non-linear data structures are trees and graphs.
      </p>
      <DataStructureList />
    </div>
  );
};

export default DataStructure;
