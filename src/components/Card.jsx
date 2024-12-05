import React from 'react'

const Card = () => {
return (
<div className="Card">
                <div className="card p-5 w-[350px] h-[250px] rounded-xl border-2 border-slate-200 backdrop-blur-2xl absolute top-[150px] left-[220px]">
                    <img src='/images/SG.png' alt='sg'/>
                    <h1 className='font-sans text-lg text-white font-bold'>Singapore</h1>
                    <h1 className='font-sans text-md mt-1 text-white'>Head Office</h1>

                    <h1 className='font-sans text-md text-white mt-5'>XYZ Pvt.Ltd.</h1>
                    <p className='font-sans text-md text-white mt-2'>Road to nowhere,06-404,500 Internal<br/>Error</p>
                </div>

                <div className="card2 p-5 w-[350px] h-[250px] rounded-xl border-2 border-slate-200 backdrop-blur-2xl absolute top-[440px] left-[30px]">
                    <img src='/images/HK.png' alt='hk'/>
                    <h1 className='font-sans text-lg text-white font-bold'>HongKong</h1>
                    <h1 className='font-sans text-md mt-1 text-white'>Branches</h1>

                    <h1 className='font-sans text-md text-white mt-5'>XYZ Pte.Ltd.</h1>
                    <p className='font-sans text-md text-white mt-2'>The Infinite Loop Office, 404 Timeout<br/>Plaza</p>
                </div>

                <div className="card3 p-5 w-[350px] h-[250px] rounded-xl border-2 border-slate-200 backdrop-blur-2xl absolute top-[440px] right-[30px]">
                    <img src='/images/US.png' alt='usa'/>
                    <h1 className='font-sans text-lg text-white font-bold'>USA</h1>
                    <h1 className='font-sans text-md mt-1 text-white'>Branches</h1>

                    <h1 className='font-sans text-md text-white mt-5'>XYZ Inc</h1>
                    <p className='font-sans text-md text-white mt-2'>Nulltown, Buglandia, 500 0xDEADBEE</p>
                </div>
            </div>
)
}

export default Card;
