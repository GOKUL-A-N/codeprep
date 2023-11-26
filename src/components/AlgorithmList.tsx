import React from 'react'
import DataStructureComponent from './DataStructureComponent'
import { Link } from 'react-router-dom'

const Algorithms:React.FC = () => {
  return (
    <div id='algorithms'>
      <h2 className='heading2'><span className='important'>Algo</span>rithms</h2>
      <div className="rounded flex justify-around flex-wrap">
        <Link to="searching"><DataStructureComponent name="Searching Algorithm" /></Link>
        <Link to="sorting"><DataStructureComponent name="Sorting Algorithm" /></Link>
        <Link to="divideandconquer"><DataStructureComponent name="Divide And Conquer" /></Link>
        <Link to="greedy"><DataStructureComponent name="Greedy Technique" /></Link>
        <Link to="backtracking"><DataStructureComponent name="Backtracking" /></Link>
        <Link to="dynamicprogramming"><DataStructureComponent name="Dynamic Programming" /></Link>
        <Link to="recursion"><DataStructureComponent name="Recursion" /></Link>
      </div>
    </div>
  )
}

export default Algorithms