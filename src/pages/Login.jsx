import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [fullname,setFullName]=useState("");
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");

    const handlelogin= ()=>{
        toast.success("You have been logged In !!!",{
            position: "top-center",
        });
        setFullName("");
        setUserName("");
        setEmail("");
        setPhone("");
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
                <h1 className='font-sans text-md ml-4'>Phone No.</h1>
                <input onChange={(e)=>setPhone(e.target.value)}
                value={phone}
                type="text" placeholder='eg: 9812345678' className='w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
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
