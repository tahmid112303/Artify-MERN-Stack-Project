import React, { useContext, useState } from 'react'
import { Link } from 'react-router';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [showPassword,setShowPassword]=useState(false);
        const [fault,setFault] = useState('');
        const [success,setSuccess] = useState(false);
        const notify = () => {
            toast("Signed in successfully!");
        }

        const notify2 = () => {
            toast("Wrong Credentials, Failed to Sign In")
        }

    function handleLogin(e){
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            setFault('');
            setSuccess(true);
            notify();
        }).catch(error=>{
            console.log(error);
            setFault(error.message);
            setSuccess(false);
            notify2();
        })
    }

  return (
    <div className='mt-30 mb-20'>
        <form onSubmit={handleLogin}>
            <fieldset className="fieldset bg-blue-200 mx-auto max-sm:ml-4 border-base-300 rounded-box w-xs border p-4">
            <h1 className='text-3xl font-bold text-center'>Login</h1>

            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" />

            <label className="label">Password</label>
            <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />

            <div onClick={()=>setShowPassword(!showPassword)} className='w-8 h-8 flex justify-center items-center font-bold relative left-60 bottom-10 cursor-pointer'>{showPassword ? "Hide" : "Show"}</div>

            <h1>Don't have an account? Please <Link className='text-purple-800 font-bold' to={'/reg'}>register</Link></h1>

            <button className="btn btn-neutral mt-4 
            text-[1.5em] font-bold">Login</button>

            {fault && <h1 className='font-bold 
            text-red-700'>{fault}</h1>}

            {success && <h1 className='font-bold 
            text-green-700'>Account Created Successfully!</h1>}
            
            </fieldset>
        </form>
    </div>
  )
}

export default Login