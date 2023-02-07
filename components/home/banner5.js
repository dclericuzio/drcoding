import React from 'react'

export default function banner5() {
  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col lg:flex-row mx-auto'>
            <div className='lg:max-w-[50%] w-full text-center lg:text-start'>
                <h1 className='px-4 lg:px-0 text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Sudah Banyak Berkerjasama dengan Perusahaan di Indonesia</h1>
            </div>
            <div className='lg:max-w-[50%] w-full relative flex'>
                <button className='justify-center lg:absolute lg:right-0 mt-4 lg:mt-10 px-4 py-2 border-2 border-[#1a1a1a] text-md font-[500] w-fit mx-auto'>Selengkapnya</button>
            </div>
        </div>
        <div className='max-w-7xl mx-auto'>
            <div className='bg-white drop-shadow-2xl min-h-fit w-full mx-auto mt-10'>
                <div className='scrollbar overflow-y-hidden snap-x flex space-x-3 overflow-scroll scrollbar-hide p-3'>
                    <div className="drop-shadow-2xl shadow-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <h1 className='text-center font-[700] text-[18px]'>PT SAR International</h1>
                        <h1 className='text-center font-[400] text-[14px] text-[##7d7d7d]'>Web Perusahaan</h1>
                        <div className="relative w-[390px]">
                            <img src="/1.png" alt='...' className='h-[300px] snap-center'/>
                        </div>
                    </div>
                    <div className="drop-shadow-2xl shadow-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <h1 className='text-center font-[700] text-[18px]'>CV IBM</h1>
                        <h1 className='text-center font-[400] text-[14px] text-[##7d7d7d]'>Web Perusahaan</h1>
                        <div className="relative w-[390px]">
                            <img src="/1.png" alt='...' className='h-[300px] snap-center'/>
                        </div>
                    </div>
                    <div className="drop-shadow-2xl shadow-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <h1 className='text-center font-[700] text-[18px]'>Kayoo</h1>
                        <h1 className='text-center font-[400] text-[14px] text-[##7d7d7d]'>Landing Page Produk</h1>
                        <div className="relative w-[390px]">
                            <img src="/1.png" alt='...' className='h-[300px] snap-center'/>
                        </div>
                    </div>
                    <div className="drop-shadow-2xl shadow-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <h1 className='text-center font-[700] text-[18px]'>HousePlant.Hub</h1>
                        <h1 className='text-center font-[400] text-[14px] text-[##7d7d7d]'>Landing Page Produk</h1>
                        <div className="relative w-[390px]">
                            <img src="/1.png" alt='...' className='h-[300px] snap-center'/>
                        </div>
                    </div>
                    <div className="drop-shadow-2xl shadow-2xl cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
                        <h1 className='text-center font-[700] text-[18px]'>Tour De Bajo</h1>
                        <h1 className='text-center font-[400] text-[14px] text-[##7d7d7d]'>Web Perusahaan</h1>
                        <div className="relative w-[390px]">
                            <img src="/1.png" alt='...' className='h-[300px] snap-center'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
