import React from 'react';

const VerifyEmail = () => {
return (
    <div  className='mainContainer bg-white h-[100vh] w-full flex'>

        <div className="LeftSec w-[50%] h-full bg-red-700">

        </div>


        <div className="rightSec w-[50%] h-full flex flex-col justify-between items-center p-10">
            <div className="upper flex flex-col justify-evenly items-start gap-10 mt-20">
                <img src='/icons/logo-87.png' className='' alt='logoIpsum'/>
                <div className="OTP">
                    <h1 className='font-sans text-3xl font-bold'>Verify your Email</h1>
                    <p className='text-slate-600 mt-3'> Please enter the 6 digit code we just sent to s********a@xyz.com</p>
                    
                    <div className="OTPboxes flex justify-evenly items-center gap-3 mt-8">
                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>

                <h1 className='font-bold text-4xl rounded-xl'>-</h1>

                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                <input
                type="text" className='w-[50px] h-[50px] rounded-xl p-5 border-2 border-slate-500'/>
                    </div>
                <button className="verify w-full bg-btnColor text-white text-center h-[40px] rounded-xl mt-5 text-lg">Verify</button>
                <h1 className='text-slate-500 mt-2 ml-2'>Wait 1:39 seconds before requesting a new code.</h1>

                </div>
            </div>
            <h1 className='text-center font-sans text-sm text-slate-500 '>By continuing, you're agreeing to Nobody's <span className='text-blue-600'>Terms of Service, Privacy Policy</span><br/>and <span className='text-blue-600'>Cookie policy</span></h1>
        </div>

    </div>
)
}

export default VerifyEmail;
