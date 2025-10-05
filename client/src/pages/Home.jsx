import React from 'react'
import { motion, scale } from 'motion/react';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import Features from '../components/Features';



const Home = ({setShowLogin}) => {


return (
    <div className='w-full max-w-6xl mx-auto p-5'>
        {/* // Section 1 Navbar */}
        <section>
            <nav className='p-3 md:p-5'>
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center gap-2">
                        <div className="grid grid-cols-2 gap-1 items-center">
                            <div className="w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-sky-300 rounded-full"></div>
                            <div className="w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-black rounded-full"></div>
                            <div className="w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-black rounded-full"></div>
                            <div className="w-[8px] md:w-[10px] h-[8px] md:h-[10px] bg-black rounded-full"></div>
                        </div>
                        <h2 className='font-semibold text-2xl md:text-3xl '>Dev<span className='bg-gradient-to-b from-sky-600 to-sky-300 text-transparent bg-clip-text'>Link</span></h2>
                    </div>

                    <div className="hidden md:flex gap-10">
                        <a className='text-[17px] hover:border-b-[1px]' href="#features">Features</a>
                        <a className='text-[17px] hover:border-b-[1px]' href="#testimonials">Testimonials</a>
                        <a className='text-[17px] hover:border-b-[1px]' href="">Resources</a>
                        <a className='text-[17px] hover:border-b-[1px]' href="">Pricing</a>
                    </div>
                    
                    <div className="flex gap-3">
                        <a href="https://github.com/Pratikrana-codes/DevLink" target="_blank" rel="noopener noreferrer" className='text-white px-1 py-1 md:px-2 md:py-1 rounded-md cursor-pointer bg-gradient-to-b from-neutral-900 to-neutral-600'>Github</a>
                    </div>
                </div>
            </nav>
        </section>
        {/* Section 2 header */}

        <section >
            <div className="mx-auto max-w-6xl w-full h-[650px] flex items-center justify-center bg-[url('/grid-pattern.svg')] bg-repeat bg-[length:15px_15px] text-center backdrop-blur-lg [mask-image:radial-gradient(circle,white_70%,transparent_100%)]">
                <motion.div
                    initial={{y:-100}}
                    whileInView={{y:0}}
                    transition={{duration: 1}}

                className="h-[400px] flex flex-col items-center justify-center gap-5 p-5">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{scale:1.10}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5},
                        }}
                    className="grid grid-cols-2 gap-2 items-center p-4 w-[80px] h-[80px] bg-white shadow-[16px_16px_32px_rgba(0,0,0,0.3)] rounded-2xl cursor-pointer">
                            <div className="w-[20px] h-[20px] bg-sky-300 rounded-full"></div>
                            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
                            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
                            <div className="w-[20px] h-[20px] bg-black rounded-full"></div>
                        </motion.div>
                    <h2 className='text-4xl md:text-6xl z-10 text-gray-600'>Empower your learning with Dev<span className='font-semibold bg-gradient-to-b from-sky-500 to-sky-300 text-transparent bg-clip-text'>Link</span></h2>
                    <p className='text-gray-400 text-xl'>Efficiently manage your study resources.</p>
                    <div className="text-2xl flex gap-5">
                        <motion.button
                            whileHover={{scale:1.10}}
                            whileTap={{scale:0.8}}
                            onClick={()=>setShowLogin(true)} className='bg-gradient-to-b from-sky-600 to-sky-300 rounded-full px-10 py-2 cursor-pointer text-white text-shadow-black shadow-[12px_12px_24px_rgba(20,120,255,0.5)]'>Sign Up ➡️</motion.button>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Section 3rd - Features */}
        <section id="features">
            <Features/>
        </section>

        {/* Section 4 cards testimonial */}
        <section id="testimonials">
            <Testimonial/>
        </section>


        {/* Section Footer */}
        <Footer/>
    </div>
  )
}

export default Home