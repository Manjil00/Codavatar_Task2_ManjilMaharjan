import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();

    const handlelogin= ()=>{
        toast.success("You have been logged In !!!",{
            position: "top-center",
        });
        setEmail("");
        setPassword("");

        setTimeout(() => {
            navigate('/Form');
        }, 2000);
    }

return (
    <div className='mainContainer w-full h-[100vh] bg-btnColor flex justify-center items-center'>
        <div className="logincontainer bg-white  w-[500px] h-[500px] rounded-xl flex flex-col justify-center items-center">
            <h1 className='font-sans text-4xl font-bold'>Login</h1>
            <div className="inputs mt-5 w-[90%] h-auto flex flex-col gap-10 justify-center items-center ">

                <div className="Input3 w-full h-[50px]">
                <h1 className='font-sans text-md ml-4'>Email</h1>
                <input onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="text" placeholder='eg: manjil01@gmail.com' className=' w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                </div>

                <div className="Input4 w-full h-[50px] ">
                <h1 className='font-sans text-md ml-4'>Password</h1>
                <input onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password" placeholder='eg: Qwerty@111222' className='w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                </div>
            </div>
            <div className="btns w-full h-[100px]  flex justify-center items-end ">
            <button
            onClick={()=>handlelogin()}
            className='p-2 bg-btnColor rounded-xl h-auto w-[100px] mt-10 text-white'>Login</button>
            <ToastContainer/>
            <Link to={"/Register"}><h1 className='text-btnColor cursor-pointer text-md underline ml-10'>Register ?</h1></Link>
            </div>
        </div>
    </div>
)
}

export default Login;
