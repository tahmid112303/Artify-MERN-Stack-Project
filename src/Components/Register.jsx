import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {

    const [showPassword,setShowPassword]=useState(false)

    function handleRegister(e){
        e.preventDefault()
    }


  return (
    <div className='mt-30 mb-20'>
        <form onSubmit={handleRegister}>
            <fieldset className="fieldset bg-green-200 mx-auto max-sm:ml-4 border-base-300 rounded-box w-xs border p-4">
            <h1 className='text-3xl font-bold text-center'>Register</h1>

            <label className="label">Name</label>
            <input type="text" name='name' className="input" placeholder="Your Name" />

            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />

            <label className="label">PhotoUrl</label>
            <input type="email" name='photo' className="input" placeholder="Photo URL" />

            <label className="label">Password</label>
            <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password"/>

            <div onClick={()=>setShowPassword(!showPassword)} className='w-8 h-8 flex justify-center items-center font-bold relative left-63 bottom-10 cursor-pointer'>{showPassword ? "Hide" : "Show"}</div>

            <h1>Already have an account? <Link className='text-purple-800 font-bold' to={'/login'}>login</Link></h1> 

            <button className="btn btn-secondary mt-4 font-bold 
            text-[1.5em]">Create Account</button>
            
            </fieldset>
        </form>
    </div>
  )
}

export default Register