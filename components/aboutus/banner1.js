import React from 'react'

export default function banner1() {
   
  return (
    <div className='w-full min-h-min pt-[230px]'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 lg:px-28'>
                <div className='text-center w-full'>
                    <h1 className='text-[#333333] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant mx-auto md:leading-[80px]'>A great solution for you</h1>
                    <img src='./aboutus/banneraboutus.png' alt='...' className='mx-auto mt-16'/>
                </div>
            </div>
        </div>
    </div>
  )
}
