import React, { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


const Url = () => {

  const [copy,setCopy]=useState(false)

const handleCopy = ()=>{
   setCopy(!copy)
}

  return (
    <div className='bg-[#128296] h-screen dark:bg-[#2b2929] py-5 flex justify-center items-center'>
        <div className='w-[500px] bg-[#b2bbce] mx-auto p-4 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            <h2 className=' text-[14px] lg:text-xl font-semibold text-gray-500 font-roboto'>Short Url</h2>
            <form className='w-full border py-2 px-3 rounded-[5px] mt-8 bg-gray-100 flex justify-between'>
            <input type="text" className='border-none outline-none lg:text-xl text-[13px]' placeholder='Enter Url'/>
            <button className='font-roboto font-medium text-[14px] lg:text-[16px] py-2 px-5 bg-gray-300 rounded-[3px]'>Submit</button>
            </form>
            <h2 className='font-normal font-roboto text-[12px] lg:text-[14px] text-gray-300 my-8'>Long url</h2>
            <div className='flex justify-between'>
             <a target='_blank' className='font-normal font-roboto text-[14px] lg:text-[16px] text-gray-500 ' href="#">Shor url</a>
             {
              copy?
                  <button><FaCheckCircle className='text-green-600 cursor-pointer'/></button>
                  :
                  <button onClick={handleCopy}><FaCopy className='text-gray-600 cursor-pointer'/></button>
                  
             }
            </div>
        </div>
    </div>
  )
}

export default Url