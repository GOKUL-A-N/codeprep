import React from 'react'
import DataStructureComponent from './DataStructureComponent'

// created list of data structures 
// needed to link them with thier repected page to view
// needed to order them in proper order

const DataStructures: React.FC = () => {
  return (
    <div>

        {/* title */}

        <h1 className='heading1 text-center'><span className='underline' style={{textDecorationColor: "#00cfba"}}>Data</span> <span style={{color: "#00cfba"}}>Structures</span></h1>

        <div  className='p-20 rounded flex justify-around flex-wrap'>
        <DataStructureComponent
        name="Arrays"
        />
        <DataStructureComponent
        name="LinkedList"
        />
        <DataStructureComponent
        name="Strings"
        />
        <DataStructureComponent
        name="Stack"
        />
        <DataStructureComponent
        name="Queue"
        />
        <DataStructureComponent
        name="Bit Manipulation"
        />
        <DataStructureComponent
        name="Math"
        /><DataStructureComponent
        name="Trees"
        />
        </div>
    </div>
  )
}

export default DataStructures