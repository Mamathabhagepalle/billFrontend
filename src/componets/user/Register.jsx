import React from 'react'

const Register = () => {
  return (
    <div className='bg-[#efefef] size-full flex justify-center items-center'>
      <form action="" className='bg-amber-200 h-1/2 w-1/2 flex justify-center items-center flex-col'>
        <div className='bg-red-500'>
          <h1>registration</h1>
        </div>
        <div>
          <input type="text" name="" placeholder='Enter Name'/>
        </div>

        <div>
          <input type="text" name="" placeholder='Enter UserName'/>
        </div>

        <div>
          <input type="email" name="" placeholder='Enter Email'/>
        </div>

        <div>
          <input type="password" name="" placeholder='Enter password'/>
        </div>

        <div>
          <input type="password" name="" placeholder='Enter repeate password'/>
        </div>

        <div>
          <button>Click</button>
        </div>
      </form>
    </div>
  )
}

export default Register