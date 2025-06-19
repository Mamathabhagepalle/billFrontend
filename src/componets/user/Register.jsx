import React, { useState } from 'react'
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TbLockPassword } from "react-icons/tb";

const Register = () => {
  let [state,setState]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })

  
      let handleChange=(e)=>{
          let {name,value}=e.target
          setState({...state,[name]:value})
      }

      let handleSubmit=(e)=>{
        e.preventDefault()
        console.log(state);
        
      }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center rounded-2xl ' >
      <form action="" className='bg-whight h-[90%]  w-1/2 flex justify-center items-center flex-col gap-8 px-[80px] py-40 shadow-2xl rounded-3xl max-md:w-[90%]' onSubmit={handleSubmit}>
        <div className='font-bold  flex justify-center items-center text-3xl max-md:w-sm'>
          <h1 >Registration Form</h1>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="name" placeholder='Enter Name' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
          <span><MdDriveFileRenameOutline /></span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="username" placeholder='Enter UserName' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
          <span><MdOutlineDriveFileRenameOutline /></span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" name="email" placeholder='Enter Email' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
          <span><MdAlternateEmail /></span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="password" placeholder='Enter password' className='w-full outline-none px-4 h-10' onChange={handleChange}/>
          <span><TbPasswordFingerprint /></span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Enter repeate password' className='w-full outline-none px-4 h-10'/>
          <span><TbLockPassword /></span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-md bg-black '>
          <button className='w-full outline-none px-4 h-10 text-white font-bold'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register