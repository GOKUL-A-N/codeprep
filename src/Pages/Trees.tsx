import React,{Key} from 'react'
import { treesData } from '../constants/trees'

const Trees: React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">Trees</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an Trees</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{treesData.definition}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20230626160718/Tree-Data-Structure--nEW.png"
        alt="arrayImage"
      />
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">Types of Trees Data Structure</h3>
      {treesData.typesOfTrees.map((scenario: String, index: Key) => (
        <li className="paragraph list-square" key={index}>
          {scenario}
        </li>
      ))}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">Operations of Trees Data Structure</h3>
      {treesData.operations.map((scenario: String, index: Key) => (
        <li className="paragraph list-square" key={index}>
          {scenario}
        </li>
      ))}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on Trees
      </h3>
      {treesData.questions.map((question) =>(
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

export default Trees