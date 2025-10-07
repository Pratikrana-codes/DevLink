import React from 'react'

const Features = () => {
  return (
    <div className='w-full max-w-6xl mx-auto p-10'>
        <div className="flex flex-col gap-5">
            <div className="">
                <h2 className='text-4xl font-semibold text-center text-gray-600 dark:text-gray-200'>Keep everything in one place.</h2>
            </div>

            <h2 className='text-[18px] text-center text-gray-400 mb-5'>Forget complex project management tools.</h2>

            <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
                <div className="flex flex-col rounded-2xl p-6 gap-5 shadow-[6px_6px_12px_rgba(20,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,255,255,0.7)] hover:scale-105 transition-all cursor-pointer">
                    <p className='text-center text-2xl dark:text-white'>Seamless collaboration</p>
                    <p className='text-gray-400 text-center'>Work together with your team effortlessly, share tasks and resources progress in real time And Enjoy.</p>
                </div>
                <div className="flex flex-col shadow-[6px_6px_12px_rgba(20,120,255,0.4)] col-span-2 rounded-2xl p-6 gap-5 hover:shadow-[6px_6px_12px_rgba(60,255,255,0.7)] hover:scale-105  transition-all cursor-pointer">
                    <p className='text-center text-2xl dark:text-white'>Time Management Tools</p>
                    <p className='text-gray-400 text-center'>Optimize your time with integrated tools like timers, reminders, and schedules.</p>
                </div>
                <div className="flex flex-col col-span-2 rounded-2xl p-6 shadow-[6px_6px_12px_rgba(20,120,255,0.4)] text-center hover:shadow-[6px_6px_12px_rgba(60,255,255,0.7)] hover:scale-105 transition-all cursor-pointer">
                    <p className='text-2xl dark:text-white'>Advanced task tracking</p>
                    <p className='text-gray-400'>A birds eye view of your entire behaviour and productivity</p>
                </div>
                <div className="flex flex-col rounded-2xl p-6 text-center shadow-[6px_6px_12px_rgba(20,120,255,0.4)] hover:shadow-[6px_6px_12px_rgba(60,225,225,0.7)] hover:scale-105  transition-all cursor-pointer">
                    <p className='text-2xl dark:text-white '>Beginning</p>
                    <p className='text-gray-400'>This is just the beginning</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features