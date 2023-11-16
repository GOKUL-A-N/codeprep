import React from 'react';
import { dynamicprogrammingData } from '../constants/dynamicprogrammingData';
import dynamicprogrammingImg from "../assets/images/dynamicprogrammingImg.png"

const DynamicProgramming = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">Dynamic Programming</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an Dynamic Programming</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{dynamicprogrammingData.definition}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src={dynamicprogrammingImg}
        alt="arrayImage"
      />
      <p className="paragraph sm:mt-10 sm:leading-10">{
        dynamicprogrammingData.explanation.map((data) => (
         <div>
           <li className=''>{data}</li>
          <br />
         </div>
        ))
      }</p>
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">When to use Dynamic Programming Data Structure</h3>
      <p className='paragraph'>
      {dynamicprogrammingData.whenToUse.map((scenario: String,index: number) => (
        <div>
          <li className="paragraph list-square" key={index}>
          {scenario}
        </li><br />
        </div>
      ))}
      </p>
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on Dynamic Programming
      </h3>
      {dynamicprogrammingData.question.map((question) =>(
        <div className="flex box mb-4 p-2">
          <a href={question.question} className="flex list w-[92%]">
          <li className=" list-none ">
          
          <tr className="">
            <td className="w-[100px]">{question.id}</td>
            <td className="w-[100px]">{question.difficulty}</td>
            <td >{question.title}</td>
          </tr>

          
        </li></a>
        <a href={question.answer} className=""><button className="bg-gray-300 p-2 hover:bg-blue-500 rounded">Reveal</button></a>
        </div>
        
      ))}
    </div>
  )
}

export default DynamicProgramming