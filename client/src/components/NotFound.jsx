import React from 'react'
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
        <h1 className='text-5xl font-bold mb-4 text-red-500'>404</h1>
        <p className='text-lg mb-6'>Oops! Page not found.</p>
        <Link to='/' className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Go back home</Link>
        
    </div>
  )
}

export default NotFound