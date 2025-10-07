import React from 'react'

const Footer = () => {
  return (
    <div className='w-full mx-auto max-w-6xl mt-10 p-10  rounded-2xl dark:text-white'>
        <div className="flex flex-col ">
            <div className="flex items-center gap-2">
                <div className="grid grid-cols-2 gap-1 items-center">
                    <div className="w-[8px] h-[8px] bg-sky-300 rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-black dark:bg-white rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-black dark:bg-white rounded-full"></div>
                    <div className="w-[8px] h-[8px] bg-black dark:bg-white rounded-full"></div>
                </div>
                <h2 className='font-semibold text-xl '>Dev<span className='bg-gradient-to-b from-sky-600 to-sky-300 text-transparent bg-clip-text'>Link</span></h2>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between pr-10 mt-10 gap-10">
                <h2 className='text-3xl font-semibold '>Stay organized and boost your productivity</h2>
                <div className="text-gray-600 dark:text-gray-400">
                    <ul className=''>
                        <li>→ About Us</li>
                        <li>→ Contact</li>
                        <li>→ What's New</li>
                        <li>→ Careers</li>
                    </ul>
                </div>
            </div>
            <div  style={{border:"1px solid #c9c9c9"}} className="w-full mt-10"></div>
            <div className="flex justify-between mt-10 text-[17px] text-gray-400">
                <p className=''>&copy;2025 All right reserved</p>
                <div className="">
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer