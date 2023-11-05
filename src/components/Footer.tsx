import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full h-[280px] mt-[100px] flex flex-col sm:flex-row'>
        <div className='w-[30%] flex items-center'>
            <h1 className='heading2'>Code<span className='important'>Prep</span></h1>
        </div>
        <div className='w-[30%] '>
            <h3 className='heading2'>Thanks to</h3><br />
            <ul className='list-style-none'>
            <li className='text-white text-[24px]'><a href="https://www.geeksforgeeks.org/">Geeks For Geeks</a></li>
            <li className='text-white text-[24px]'><a href="https://leetcode.com/">LeetCode</a></li>
            <li className='text-white text-[24px]'><a href="https://walkccc.me/LeetCode/">WalkCCC</a></li>
            <li className='text-white text-[24px]'><a href="https://bard.google.com/">Bard.ai</a></li>
            </ul>
        </div>
        <div>
            <h3 className='heading2'>Links</h3><br />
            <ul className='list-style-none'>
                <li className='text-white text-[24px]'><Link to="/roadmap">Roadmap</Link></li>
                <li className='text-white text-[24px]'><Link to="/blogs">Blogs</Link></li>
                <li className='text-white text-[24px]'><Link to="/datastructure">Data Structures</Link></li>
                <li className='text-white text-[24px]'><Link to="algorithms">Algorithm</Link></li>
            </ul>
        </div>
        <div className='flex flex-col w-[20%] items-center'>
            <h6 className='heading2'>Eat</h6>
            <h6 className='heading2'>Sleep</h6>
            <h6 className='heading2'>Code</h6>
            <h6 className='important'>Repeat</h6>
        </div>
    </div>
  )
}

export default Footer