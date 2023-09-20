import React from 'react'

const Home = () => {
    return (
        <>
            <div className='max-w-[1640px] mx-auto p-4'>
                <div className='max-h-[500px] relative'>

                    <div className='absolute w-full h-full flex justify-center flex-col'>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'><span className='text-orange-500'>Taste the</span> Best </h1>
                        <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white'>Foods <span className='text-orange-500'>With us</span></h1>
                    </div>
                        <div>
                            <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
                        </div>
                </div>
            </div>

        </>
    )
}

export default Home