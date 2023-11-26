import React from 'react'
import { greedytechniqueData } from '../constants/greedytechnique'

const GreedyTechnique:React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">Greedy Technique</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an Greedy Technique</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{greedytechniqueData.definition}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src="https://www.geeksforgeeks.org/wp-content/uploads/Fractional-Knapsackexample-min-768x384.png"
        alt="arrayImage"
      />
      {/* <p className="paragraph sm:mt-10 sm:leading-10">{greedytechniqueData.explanation}</p> */}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">Explanation for Greedy Technique Data Structure</h3>
      {greedytechniqueData.explanation.map((scenario: String, index: Key) => (
        <li className="paragraph list-square" key={index}>
          {scenario}
        </li>
      ))}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on Greedy Technique
      </h3>
      {greedytechniqueData.questions.map((question) =>(
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

export default GreedyTechnique