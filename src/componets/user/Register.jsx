import React from 'react'

const Register = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center rounded-2xl' >
      <form action="" className='bg-whight h-2/3  w-1/2 flex justify-center items-center flex-col gap-4 px-[80px] py-40 shadow-2xl rounded-3xl'>
        <div className='font-bold  flex justify-center items-center text-3xl '>
          <h1>Registration Form</h1>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="" placeholder='Enter Name' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="text" name="" placeholder='Enter UserName' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="email" name="" placeholder='Enter Email' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Enter password' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-sm'>
          <input type="password" name="" placeholder='Enter repeate password' className='w-full outline-none px-4 h-10'/>
        </div>

        <div className='border-2 w-full flex justify-center items-center px-3 rounded-md bg-black '>
          <button className='w-full outline-none px-4 h-10 text-white font-bold'>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register