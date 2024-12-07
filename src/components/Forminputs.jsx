import React,{useState} from 'react'

const Forminputs = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [selectedOption2, setSelectedOption2] = useState('');
    const [selectedOption3, setSelectedOption3] = useState('');

    const handleDdown1 = (e) => {
        setSelectedOption(e.target.value);
    };
    const handleDdown2 = (e) => {
        setSelectedOption2(e.target.value);
    };
    const handleDdown3 = (e) => {
        setSelectedOption3(e.target.value);
    };


return (
    <div className='w-full h-auto'>
        <div className="inputfields grid grid-cols-2 gap-8 mt-10">
                <div className="legalName">
                    <label className='text-slate-500'>Legal Name <span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Legal Name' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                <div className="business as">
                    <label className='text-slate-500'>Doing business as<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Doing business as' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Company Registration Number <span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Company Registration Number' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Website URL<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Website URL' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>Industry Name<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Industry Name' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div><div className="legalName">
                    <label className='text-slate-500'>One Random Dropdown?<span className='text-btnColor'> *</span></label>
                    <select
        value={selectedOption}
        onChange={handleDdown1}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This</option>
        <option value="option2">is</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div><div className="legalName">
                    <label className='text-slate-500'>Which dropdown would you like to select?<span className='text-btnColor'> *</span></label>
                    <select
        value={selectedOption2}
        onChange={handleDdown2}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This</option>
        <option value="option2">is</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Another Random Dropdown Appears<span className='text-btnColor'> *</span></label>
                    <select
        value={selectedOption3}
        onChange={handleDdown3}
        className="w-full mt-2 p-3 bg-white text-slate-500 border-2 border-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="" disabled>Select an option...</option>
        <option value="option1">This is</option>
        <option value="option2">Another</option>
        <option value="option3">Random</option>
        <option value="option4">Dropdown</option>
    </select>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Random count per month<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Random count per month' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Expected total visits in this page<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Expected total visits in this page' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Purpose of using fake form<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Purpose of using fake form' className='border border-gray-400 p-2 h-[100px] w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Ek description to banta hai<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Ek description to banta hai' className='border border-gray-400 p-2 h-[100px] w-full mt-3 rounded-xl'/>
                </div>
                <div className="legalName">
                    <label className='text-slate-500'>Contact Email<span className='text-btnColor'> *</span></label>
                    <input type="text" placeholder='Contact Email' className='border border-gray-400 p-2 w-full mt-3 rounded-xl'/>
                </div>
                </div>
    </div>
)
}

export default Forminputs;
