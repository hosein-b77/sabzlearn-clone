import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Accordion({ title, sessions, isUserRegisteredToThisCourse }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='w-full bg-slate-50 shadow-lg mt-10  pt-6 border border-slate-300 rounded-md'>
            <div className={`${isOpen && 'border-b border-slate-300'} text-sky-600 cursor-pointer px-5 flex items-center justify-between h-8  pb-5 `} onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <div className={`transition-transform ${isOpen && 'rotate-180'}`}>
                    <i className={`fa-solid fa-chevron-up text-md `}></i>
                </div>

            </div>
            <div className={`${!isOpen && 'h-0 overflow-hidden '} `}>

                {
                    sessions.map((session, index) => {
                        return (

                            <>
                                {
                                    isUserRegisteredToThisCourse ? (
                                        <div className='flex items-center justify-between h-20 px-5'>
                                            <div className='flex items-center gap-x-8 font-bold text-slate-700 cursor-pointer'>
                                                <div className='flex items-center gap-x-5'>
                                                    <div className='text-[12px] grid place-items-center border-2 border-slate-300 rounded-full w-10 h-10'>
                                                        {index + 1}
                                                    </div>
                                                    <i className="fa-brands fa-youtube text-slate-500"></i>
                                                </div>
                                                <Link to='#' className='text-[14px] text-slate-700'>{session.title}</Link>
                                            </div>
                                            <div className='text-slate-500'>{session.time}
                                                <i className="fa-solid fa-video mr-5"></i>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center justify-between h-20 px-5'>
                                            <div className='flex items-center gap-x-8 font-bold text-slate-700 cursor-pointer'>
                                                <div className='flex items-center gap-x-5'>
                                                    <div className='text-[12px] grid place-items-center border-2 border-slate-300 rounded-full w-10 h-10'>
                                                        {index + 1}
                                                    </div>
                                                    <i className="fa-brands fa-youtube text-slate-500"></i>
                                                </div>
                                                <h3 className='text-[14px] text-slate-700'>{session.title}</h3>
                                            </div>
                                            <div className='text-slate-500'>{session.time}
                                                <i className="fa-solid fa-lock mr-5"></i>
                                            </div>
                                        </div>
                                    )
                                }

                            </>
                        )
                    })
                }


            </div>
        </div>
    )
}
