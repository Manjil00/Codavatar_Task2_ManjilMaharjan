import React, { useState } from 'react';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from '../components/Card';

const VerifyEmail = () => {

    const [first,setFirst]=useState("");
    const [second,setSecond]=useState("");
    const [third,setThird]=useState("");
    const [fourth,setFourth]=useState("");
    const [fifth,setFifth]=useState("");
    const [sixth,setSixth]=useState("");
    const navigate=useNavigate();

    const handleVerification=()=>{
        if(first==="" && second==="" && third==="" && fourth==="" && fifth==="" && sixth===""){
            toast("Please Enter OTP sent to you or Random Number To stimulate",{
                position: "top-center",
            });
        }
        else{
            toast.success("You have been sucfully verified Please Login Now !!",{
                position: "top-center",
            });
            setFirst("");setSecond("");setThird("");setFourth("");setFifth("");setSixth("");

            setTimeout(() => {
                navigate('/Form');
            }, 2000);
        }
    }
return (
    <div  className='mainContainer bg-white h-[100vh] w-full flex'>

        <div className="LeftSec w-[50%] h-full bg-gradient-to-br from-blue-500 to-yellow-700 relative">
            <img src='/images/Mask group.png' className='h-full w-full object-cover overflow-hidden' alt='bgleft'/>
            <h2 className='flex justify-start items-center gap-5 ml-5 absolute left-5 top-8 text-white'><AiOutlineArrowLeft /> Back</h2>
            <h1 className=' absolute left-[300px] top-[70px] font-sans text-3xl text-white font-bold'>Layout Cards</h1>
            <Card/>
        </div>

        <div className="rightSec w-[50%] h-full flex flex-col justify-between items-center p-10">
            <div className="upper flex flex-col justify-evenly items-start gap-10 mt-20">
                <img src='/icons/logo-87.png' className='' alt='logoIpsum'/>
                <div className="OTP">
                    <h1 className='font-sans text-3xl font-bold'>Verify your Email</h1>
                    <p className='text-slate-600 mt-3'> Please enter the 6 digit code we just sent to s********a@xyz.com</p>
                    
                    <div className="OTPboxes flex justify-evenly items-center gap-3 mt-8">
                <input onChange={(e)=>setFirst(e.target.value)}
                value={first}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input onChange={(e)=>setSecond(e.target.value)}
                value={second}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input onChange={(e)=>setThird(e.target.value)}
                value={third}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>

                <h1 className='font-bold text-4xl rounded-xl'>-</h1>

                <input onChange={(e)=>setFourth(e.target.value)}
                value={fourth}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input onChange={(e)=>setFifth(e.target.value)}
                value={fifth}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input onChange={(e)=>setSixth(e.target.value)}
                value={sixth}
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                    </div>
                <button onClick={()=>handleVerification()}
                className="verify w-full bg-btnColor text-white text-center h-[40px] rounded-xl mt-5 text-lg">Verify</button>
                <h1 className='text-slate-500 mt-2 ml-2'>Wait 1:39 seconds before requesting a new code.</h1>
                <ToastContainer/>
                </div>
            </div>
            <h1 className='text-center font-sans text-sm text-slate-500 '>By continuing, you're agreeing to Nobody's <span className='text-blue-600'>Terms of Service, Privacy Policy</span><br/>and <span className='text-blue-600'>Cookie policy</span></h1>
        </div>

    </div>
)
}

export default VerifyEmail;
