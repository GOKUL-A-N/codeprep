import React,{Key} from 'react'
import { recursionData } from '../constants/recursion'

const Recursion:React.FC = () => {
  return (
    <div className="overflow-x-hidden max-w-[90%] xl:max-w-[80%] mx-auto mb-24">
      <h1 className="heading1 mt-10 text-center">Recursion</h1>
      <h3 className="heading2 mt-4 mb-2 sm:mt-6 sm:mb-3">What is an Recursion</h3>
      <p className="paragraph sm:mb-10 sm:leading-10">{recursionData.definition}</p>
      <img
        className="hidden sm:block h-[25rem] md:h-[35rem] w-full"
        src="https://media.geeksforgeeks.org/wp-content/uploads/20191107235734/fib1.jpg"
        alt="arrayImage"
      />
      {/* <p className="paragraph sm:mt-10 sm:leading-10">{recursionData.explanation}</p> */}
      <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">Key Features Of Recursion Algorithm</h3>
      {recursionData.keyFeatures.map((scenario: String, index: Key) => (
        <li className="paragraph list-square" key={index}>
          {scenario}
        </li>
      ))}
      <br />
      <a href="https://youtu.be/k-7jJP7QFEM?si=9i3gJltGA8MKfZrA"><button className='third' >Learn More</button></a>
      {/* <h3 className="heading2 mt-4 mb-2 sm:mt-10 sm:mb-3">
        Important Coding Problems on Recursion
      </h3>
      {array.questions.map((question) =>(
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
        
      ))} */}
    </div>
  )
}

export default Recursion