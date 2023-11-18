import React from 'react'

const CreateBlog: React.FC = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
        <form action="" className='w-[80%] h-[80%] rounded-e-md p-7' style={{backgroundColor: "#444444"}}>
        <label
          
          className="mb-3 block  font-medium bg-transparent text-white text-[25px]"
        >
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        /><br /><br />
        <label
          className="mb-3 block  font-medium bg-transparent text-[25px] text-white"
        >
          Content
        </label>
        <textarea
          rows="10"
          name="message"
          id="message"
          placeholder="Type your content here"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea><br /><br />
        <button className='third rounded-md'>Save</button>
        </form>
    </div>
  )
}

export default CreateBlog