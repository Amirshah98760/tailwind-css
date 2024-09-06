import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between px-5 p-2'>
            <div className='flex justify-center items-center gap-x-4'>
            
                <img src="https://tse1.mm.bing.net/th?id=OIP.g5K8l_AA_9GEXSD16ypjtgHaHa&pid=Api" alt="" className='w-[60px] h-[60px] cursor-pointer'/>
             <h2 className='font-bold text-gray-600 text-lg cursor-pointer'>WOW CAFE</h2>
            </div>
            <div className='flex justify-center items-center gap-x-5'>
                <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Home</h2>
                <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>About</h2>
                <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Foods</h2>
                <h2 className='text-gray-600 hover:text-pink-500 cursor-pointer font-semibold'>Contact</h2>
            </div>
        </nav>
    )
}

export default Navbar