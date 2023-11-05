import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
        <div className="flex flex-col justify-center items-center">
        <h1 className=' text-[90px]  font-extrabold text-border-2 sampleHeading' style={{color: "#0f1316"}}>404</h1>
        <h2 className='heading2'>Sorry unable to fetch page</h2>
        <br />
        <Link to="/"><button className='third'>Home</button></Link>
        </div>
    </div>
  )
}

export default NoPage