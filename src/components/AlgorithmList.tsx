import React from 'react'
import DataStructureComponent from './DataStructureComponent'
import { Link } from 'react-router-dom'

const Algorithms = () => {
  return (
    <div id='algorithms'>
      <h2 className='heading2'><span className='important'>Algo</span>rithms</h2>
      <div className="rounded flex justify-around flex-wrap">
        <Link to="arrays"><DataStructureComponent name="Searching Algorithm" /></Link>
        <Link to="string"><DataStructureComponent name="Sorting Algorithm" /></Link>
        <Link to="linkedllist"><DataStructureComponent name="Divide And Conquer" /></Link>
        <Link to="stack"><DataStructureComponent name="Greedy Technique" /></Link>
        <Link to="queue"><DataStructureComponent name="Backtracking" /></Link>
        <Link to="queue"><DataStructureComponent name="Dynamic Programming" /></Link>
        <Link to="queue"><DataStructureComponent name="Recursion" /></Link>
      </div>
    </div>
  )
}

export default Algorithms