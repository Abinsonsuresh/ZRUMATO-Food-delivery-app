import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [service, setService] = useState(false)

    return (
        <>
            <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
                {/* LEFT */}
                <div className='flex items-center'>

                    <h1 className='text-2xl lg:text-4xl font-bold px-2'>
                        Best Eats
                    </h1>
                    <div className='hidden lg:flex items-center bg-gray-300 rounded-full p-1 text-sm cursor-pointer ' onClick={()=> setService(!service)}>
                        <p className={service ? ' text-black rounded-full p-2 ' : 'bg-black text-white rounded-full p-2 ' }>Delivery</p>
                        <p className={service ? 'bg-black text-white rounded-full p-2 ' : ' text-black rounded-full p-2 ' }>Pickup</p>
                    </div>
                </div>


                <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px]  lg:w-[500px]'>
                    <AiOutlineSearch size={25} />
                    <input
                        className='bg-transparent p-2 w-full focus:outline-none'
                        type='text'
                        placeholder='Search foods'
                    />
                </div>
                <div className='flex items-center space-x-4'>
                <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
                    <BsFillCartFill size={20} className='mr-2' /> Cart
                </button>
                    <div>
                        <AiOutlineMenu size={30} onClick={() => setNav(!nav)} />
                    </div>
                </div>
          

                {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

                {/* Side drawer menu */}
                <div className={nav ? 'fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                    <AiOutlineClose
                        onClick={() => setNav(!nav)}
                        size={30}
                        className='absolute right-4 top-4 cursor-pointer'
                    />
                    <h2 className='text-2xl p-4'>
                        BestEats
                    </h2>
                    <nav>
                        <ul className='flex flex-col p-4 text-gray-800'>
                            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                            <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                            <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                            <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                        </ul>
                    </nav>
                </div>

            </div>
        </>
    )
}

export default Navbar