import React from 'react';
import Navbar from '../components/Navbar';
import { blogs } from '../constants/blogContents';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className='relative'>
      <div className='p-10'>
      <Navbar />
      </div>
      <div className='pl-5 flex flex-col items-center'>
          {blogs.map((blog) => (
            <div className='p-10 mb-4 w-[85%] relative rounded-sm border-2 border-emerald-900 flex flex-col'>
              <div className=' bg-transparent'>
              
              
              </div><br />
              <div className='bg-transparent p-6'>
                <p className='bg-transparent paragraph'>{blog.content}</p>
              </div>
              <div className=''>
                  <h6 className='absolute top-2 right-10 bg-transparent text-white text-[25px] font-semibold'>Posted on : {blog.Date}</h6>
                  <h6 className='heading2 absolute bottom-2 right-10'>-{blog.name}</h6>
              </div>
            </div>
          ))}
      </div>
      <Link to="/createblog" className='fixed right-5 bottom-5 flex rounded p-3 bg-slate-800'>
        <h6 className='important bg-transparent '>Create </h6>
        <button className='p-4 ml-4 rounded-full' style={{backgroundColor: "#00CFBA"}}> ➕</button>
      </Link>
    </div>
  )
}

export default Blogs