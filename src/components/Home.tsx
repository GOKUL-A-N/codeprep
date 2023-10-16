import React from 'react'

const Home: React.FC = () => {
  return (
    // created home page with default text and button to get started
    // needed to add a background image
    // link the button to the data structures page
    <div className='h-screen flex flex-col justify-center '>
      <div className='p-3 sm:p-10'>
        <h3 className='heading2'>A complete DSA guide</h3>
        {/* <h1 className='heading1'>The lead to become <br className='sm:hidden' /> a <span className='important font-[34px] sm:text-[68px]'>10x Programmer </span></h1> */}
        <h1 className='heading1'>Personalised Platform to make <br /><span style={{color: "#00cfba"}}>coding</span> easier for you</h1>
        <h4 className='heading2'>Start from scratch, Build up expertise ✨</h4>
        <button className='third mt-14 rounded'><span className='font-semibold bg-transparent '>Join The Movement</span></button>
      </div>
    </div>
  )
}

export default Home