import React from 'react'
import Forminputs from '../components/Forminputs';
import DndUpload from '../components/DndUpload';
import { toast } from 'react-toastify';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {

const handleprev=()=>{
    toast("No Previous Form",{
        position: "top-center",
    });
}

const handlenext=()=>{
    toast("No Next Form",{
        position: "top-center",
    });
}

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

                <div className="DNDform mt-8">
                    <h1 className='font-sans text-xl font-semibold'>Certification of Incorporation<span className='text-red-600'>*</span></h1>
                    <p className="upload text-slate-500 mt-2">Upload the incorporated certificate</p>
                    <DndUpload/>
                    <h1 className='font-sans text-xl font-semibold mt-5'>Company Logo<span className='text-red-600'>*</span></h1>
                    <p className="upload text-slate-500 mt-2">Upload the company logo</p>
                    <DndUpload/>
                </div>

            <div className="pagination flex justify-between items-center mt-10 p-2">
                <ToastContainer/>
                <button onClick={()=>handlenext()}
                className='p-3 bg-white hover:bg-btnColor hover:text-white hover:border-none rounded-xl border-2 border-black text-black w-[100px] h-[50px]'>Previous</button>
                <button onClick={()=>handleprev()}
                className='p-3 bg-btnColor rounded-xl text-white w-[100px] h-[50px]'>Next</button>
            </div>

            </div>
        </div>
        
    </div>
)
}

export default Form;
