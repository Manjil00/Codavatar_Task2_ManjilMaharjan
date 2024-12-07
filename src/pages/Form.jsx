import React from 'react'
import Forminputs from '../components/Forminputs';

const Form = () => {

return (
    <div className='mainContainer bg-white h-auto w-full p-2'>
        <div className="TopSection">
            <h1 className='font-sans text-xl text-center font-semibold mt-5'> Multi-Step Process Form Assignment</h1>
            <div className="progreesssPlace w-full h-auto bg-white relative">
                <img src='/images/group8.png' className='w-[80%] mt-20 mx-auto' alt='progers'/>
            <div className="progressNames text-center flex justify-center items-center gap-[100px] mt-5 text-slate-500">
                <h1>Business <br/>Type</h1>
                <h1>Business <br/>Details</h1>
                <h1>Authorized <br/>Representative</h1>
                <h1>Business <br/>Owners</h1>
                <h1>Company <br/>Directors</h1>
                <h1>Support <br/>Information</h1>
                <h1>Add <br/>Details</h1>
                <h1>Complete <br/>Registration</h1>
            </div>
            {/* <img src='/icons/Done.png' className='h-[20px] w-[20px] absolute top-0 left-[140px]' alt='done'/> */}
            </div>
            
        </div>

        <div className="bottom flex flex-col justify-center items-center">
            <div className="formInputs p-[100px] w-[1000px] h-auto bg-white mx-auto">
                <h1 className='text-black text-3xl'>Tell us more about your business</h1>
                <p className='text-slate-500 text-sm mt-2'>Your info is like the Wi-Fi password--totally crucial for keeping things running, impressing the money folks, and making sure you <br/>get top notch service without any buffering!</p>
                    <Forminputs/>
        
            </div>
        </div>
        
    </div>
)
}

export default Form;
