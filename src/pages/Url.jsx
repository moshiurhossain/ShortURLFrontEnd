import axios from 'axios';
import React, { useState } from 'react'
import { FaCopy } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


const Url = () => {
// copy , setCopy useState starts
const [copy,setCopy]=useState(false)
// short url useState starts
const [longUrl,setLongUrl]=useState('')
// error useState starts
const [myerror,setMyError]=useState('')
// displaylongUrl useState starts
const [display,setDisplay]=useState('')
// url response useState
const [urlResponse,setUrlResponse]=useState('')

// handleCopy function starts
const handleCopy = ()=>{

  //  copy set to true
   setCopy(!copy)

  //  copy set to false after 2.5seconds
   setTimeout(()=>setCopy(copy),2500)

  //  copy text
  const copiedText = document.querySelector('.copiedText')

  //  Copy the text inside the text field
  navigator.clipboard.writeText(copiedText.textContent);


  console.log('text coppied')
}
// handleShort function Starts
const handleShort =(e)=>{
  e.preventDefault()
 if(!longUrl) return setMyError('Alert input is empty')
  setMyError('')
 
axios.post('http://localhost:8000/url/sendlongurl',{longUrl})
 .then((res)=> setUrlResponse(res.data.shortUrl))
 .catch((err)=>console.log(err))
 setDisplay(longUrl)
 setLongUrl('')
 console.log(data)
}


  return (
    <div className='bg-[#128296] h-screen dark:bg-[#2b2929] py-5 flex justify-center items-center'>
        <div className='w-[500px] bg-[#b2bbce] mx-auto p-4 rounded-lg shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            <h2 className=' text-[14px] lg:text-xl font-semibold text-gray-500 font-roboto'>Short Url</h2>
             <p className='text-[12px] text-red-400 font-roboto mt-3'>{myerror}</p>
            <form onSubmit={handleShort} className='w-full border py-2 px-3 rounded-[5px] mt-8 bg-gray-100 flex justify-between'>
            <input 
            value={longUrl}
            onChange={(e)=>setLongUrl(e.target.value)}
            type="text" className='border-none outline-none lg:text-xl text-[13px]' placeholder='Enter Url'/>
            <button
           
            className='active:scale-[1.1] cursor-pointer font-roboto font-medium text-[14px] lg:text-[16px] py-2 px-5 bg-gray-300 rounded-[3px]'>Submit</button>
            </form>
            <div className='flex items-center font-normal font-roboto text-[12px] lg:text-[14px] text-gray-300' >

            <h2 className=' my-8'>Long url </h2><div className='ml-3 overflow-x-hidden w-[330px]'>{display}</div>
            </div>
           
            <div className='flex justify-between pr-2'>
             <a target='_blank' className='font-normal font-roboto text-[14px] lg:text-[16px] text-gray-500 ' href="#">Short url
              <span className=' font-medium copiedText ml-5'>{urlResponse}</span>
             </a>
             {
              copy?
                  <button><FaCheckCircle className='text-green-600 cursor-pointer'/></button>
                  :
                  <button className='active:scale-[1.2]' onClick={handleCopy}><FaCopy className=' text-gray-600 cursor-pointer'/></button>
                  
             }
            </div>
        </div>
    </div>
  )
}

export default Url