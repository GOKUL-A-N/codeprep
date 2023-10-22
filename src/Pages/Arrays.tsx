import React, { Key } from "react";
import { array } from "../constants/index.js";
import arrayImg from "../assets/images/arrays.png";

const Arrays: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[60%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">Arrays</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an array</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{array.definition}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src={arrayImg}
        alt="arrayImage"
      />
      <p className="paragraph sm:mt-10 sm:leading-10">{array.explanation}</p>
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">When to use Array Data Structure</h3>
      {array.whenToUse.map((scenario: String, index: Key) => (
        <li className="paragraph list-square" key={index}>
          {scenario}
        </li>
      ))}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on Arrays
      </h3>
    </div>
  );
};

export default Arrays;
