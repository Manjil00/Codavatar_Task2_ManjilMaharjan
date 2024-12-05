import React,{useState} from 'react'

const Form = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };
return (
    <div className='mainContainer bg-white h-auto w-full p-2'>
        <div className="TopSection">
            <h1 className='font-sans text-xl text-center font-semibold mt-5'> Multi-Step Process Form Assignment</h1>
            <div className="progreesssPlace w-full h-auto bg-red-800">
            <div className="progressLine h-[10px] bg-blue-600 rounded-xl w-[80%] mx-auto mt-20"></div>
            <div className="progressNames flex justify-center items-center gap-[100px] text-slate-500">
                <h1>Business <br/>Type</h1>
                <h1>Business <br/>Details</h1>
                <h1>Authorized <br/>Representative</h1>
                <h1>Business <br/>Owners</h1>
                <h1>Company <br/>Directors</h1>
                <h1>Support <br/>Information</h1>
                <h1>Add <br/>Details</h1>
                <h1>Complete <br/>Registration</h1>
            </div>
            </div>
            
        </div>

        <div className="bottom flex flex-col justify-center items-center">
            <div className="formInputs p-[100px] w-[1000px] h-auto bg-white mx-auto">
                <h1 className='text-black text-3xl'>Tell us more about your business</h1>
                <p className='text-slate-500 text-sm mt-2'>Your info is like the Wi-Fi password--totally crucial for keeping things running, impressing the money folks, and making sure you <br/>get top notch service without any buffering!</p>

                <div className="inputfields grid grid-cols-2 gap-8 mt-10">
                <div className="legalName">
                    <label className='text-slate-500'>Legal Name <span className='text-btnColor'>*</span></label>
                    <input type="text" placeholder='Legal Name' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                <div className="business as">
                    <label className='text-slate-500'>Doing business as</label>
                    <input type="text" placeholder='Doing business as' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Company Registration Number</label>
                    <input type="text" placeholder='Company Registration Number' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Website URL</label>
                    <input type="text" placeholder='Website URL' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Industry Name</label>
                    <input type="text" placeholder='Industry Name' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>One Random Dropdown?</label>
                    <select
        value={selectedOption}
        onChange={handleChange}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This</option>
        <option value="option2">is</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div><div className="legalName">
                    <label className='text-slate-500'>Which dropdown would you like to select?</label>
                    <select
        value={selectedOption}
        onChange={handleChange}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This</option>
        <option value="option2">is</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Another Random Dropdown Appears</label>
                    <select
        value={selectedOption}
        onChange={handleChange}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This is</option>
        <option value="option2">Another</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Random count per month</label>
                    <input type="text" placeholder='Random count per month' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Expected total visits in this page</label>
                    <input type="text" placeholder='Expected total visits in this page' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div> 
                <div className="legalName">
                    <label className='text-slate-500'>Purpose of using fake form</label>
                    <input type="text" placeholder='Purpose of using fake form' className='border border-gray-400 p-2 h-[100px] w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Ek description to banta hai</label>
                    <input type="text" placeholder='Ek description to banta hai' className='border border-gray-400 p-2 h-[100px] w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Contact Email</label>
                    <input type="text" placeholder='Contact Email' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                </div>
            </div>
        </div>
        
    </div>
)
}

export default Form;
