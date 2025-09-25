import React from 'react'

const Url = () => {
  return (
    <div className='bg-[#128296] h-screen dark:bg-[#2b2929] py-5 flex justify-center items-center'>
        <div className='w-[500px] bg-[#b2bbce] mx-auto p-4 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            <h2 className='text-xl font-meduim text-gray-500 font-roboto'>Short Url</h2>
            <input type="text" className=''/>
        </div>
    </div>
  )
}

export default Url