import React,{useState} from 'react'
import { Link, Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [fullname,setFullName]=useState("");
    const [username,setUserName]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();


    const handleregister= ()=>{
        toast.success("You have been Registered Successfully !!!",{
            position: "top-center",
        });
        setFullName("");
        setUserName("");
        setEmail("");
        setPhone("");
        setPassword("");

        setTimeout(() => {
            navigate('/');
        }, 2000);
    };

return (
    <div className='mainContainer w-full h-[100vh] bg-btnColor flex justify-center items-center'>
        <div className="registercontainer bg-white w-[500px] h-[600px] rounded-xl flex flex-col justify-center items-center">
            <h1 className='font-sans text-4xl font-bold'>Register</h1>
            <div className="inputs mt-5 w-[90%] h-auto flex flex-col gap-10 justify-center items-center ">

                <div className="Input1 w-full h-[50px] ">
                <h1 className='font-sans text-md ml-4'>Fullname</h1>
                <input onChange={(e)=>setFullName(e.target.value)}
                value={fullname}
                type="text" placeholder='eg: Manjil Maharjan' className='w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                </div>

                <div className="Input2 w-full h-[50px] ">
                <h1 className='font-sans text-md ml-4 '>Username</h1>
                <input onChange={(e)=>setUserName(e.target.value)}
                value={username}
                type="text" placeholder='eg: Manjil_007' className='w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                </div>

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

                <div className="Input5 w-full h-[50px] ">
                <h1 className='font-sans text-md ml-4'>Password</h1>
                <input onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password" placeholder='eg: Abcd@123AAb' className='w-full h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                </div>

            </div>
            <div className="btns w-full h-[100px]  flex justify-center items-end ">
            <button
            onClick={()=>handleregister()}
            className='p-2 bg-btnColor rounded-xl h-auto w-[100px] mt-10 text-white'>Login</button>
            <ToastContainer/>
        </div>
        </div>
    </div>
)
}

export default Register;
