import React from 'react'

export default function banner1() {

  return (
    <div className='w-full min-h-min pt-16'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='whitespace-nowrap ease-linear transition-all duration-1000'>
                <img src="./home/bannerhome.webp" className='h-[900px] w-full object-cover'/>
            </div>
            <div className='absolute w-full h-[650px] md:h-[750px] px-4 lg:px-28'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                    <h1 className='text-[#f3f3f3] max-w-[70%] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant mx-auto md:max-w-4xl md:leading-[80px]'>Empowering your Business Potential with Digital Solutions</h1>
                    <h1 className='text-[#f3f3f3] max-w-[80%] mx-auto sm:max-w-md text-[14px] mt-8 leading-7 font-dmsans'>Create your own website and mobile application that brings your visions to life.</h1>
                    <a href='/service'><button className='custombuttonwhite cursor-pointer px-7 py-3 rounded-full font-dmsans mt-10'>See what we do</button></a>
                </div>
            </div>
        </div>
    </div>
  )
}