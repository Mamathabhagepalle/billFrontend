import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TbLockPassword } from "react-icons/tb";
import {validatePassword} from "val-pass"

const Register = () => {
  let [state,setState]=useState({
    name:"",
    username:"",
    email:"",
    password:""
  })

  let [repeatPassword,setReapeatePassword]=useState("")

  let[errorMessage,setErrorMessage]=useState("")
  
      let handleChange=(e)=>{
          let {name,value}=e.target
          if(name=="password"){
            let {validateAll,getAllValidationErrorMessage}=validatePassword(value,8)

            validateAll()?setErrorMessage(""):setErrorMessage(getAllValidationErrorMessage())
            value==""&&setErrorMessage("")
          }
          setState({...state,[name]:value})
      }

      let handleSubmit=(e)=>{
        e.preventDefault()
        let {name,username,password,email}=state
        if(!name||!username||!password||!email){
           toast.error("all fields are mandatory")
          return
        }
       let {validateAll,getAllValidationErrorMessage}=validatePassword(password)
        if(!validateAll()){
          toast.error(`${getAllValidationErrorMessage}`)
        }

        if(!repeatPassword){
          toast.error("password and confirm password did not match")
          return
          
        }
        console.log(state);
        
      }

       let handlePasswordCheck=(e)=>{
        setReapeatePassword(e.target.value)
        console.log(repeatPassword)
        
        if(state.password!=e.target.value){
          e.target.style.borderBottom="2px solid red"
        }else{
          e.target.style.borderBottom="2px solid white"
        }
      }
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center rounded-2xl ' >
      <form action="" className='bg-whight h-[90%]  w-1/2 flex justify-center items-center flex-col gap-8 px-[80px] py-40 shadow-2xl rounded-3xl max-md:w-[90%] overflow-hidden' onSubmit={handleSubmit}>
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

        <div className={errorMessage?'w-full flex justify-center items-center px-3 rounded-sm':'hidden'}>
          <span className='text-red-500'>*{errorMessage}</span>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Enter repeate password' className='w-full outline-none px-4 h-10' onChange={handlePasswordCheck}/>
          <span><TbLockPassword /></span>
        </div>

        

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-md bg-black hover:bg-[#555] active:bg-amber-400]'>
          <button className='w-full outline-none px-4 h-10 text-white font-bold '>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register