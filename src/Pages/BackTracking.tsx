import React from 'react';
import { backtrackingData } from '../constants/backtrackingData';
import backtrackingImg from '../assets/images/backtrackingImg.png';

const BackTracking = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">backTracking</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an backtracking</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{backtrackingData.definitions}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src={backtrackingImg}
        alt="arrayImage"
      />
      <p className="paragraph sm:mt-10 sm:leading-10">{backtrackingData.explanation}</p>
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">When to use BackTracking Data Structure</h3>
      <p className='paragraph'>{backtrackingData.whenToUse}</p>
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on BackTracking
      </h3>
      {backtrackingData.questions.map((question) =>(
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

export default BackTracking