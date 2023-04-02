import React from 'react'

export default function getContact() {
  return (
    <div className='w-full py-20 bg-custombgblue'>
        <div className='flex flex-col mx-auto'>
            <h1 className='px-4 text-center mx-auto text-[40px] font-[500] text-[#ffffff] font-cormorant'>We're here for you</h1>
            <h1 className='pt-4 mx-auto px-4 text-center font-[400] text-[14px] text-[#ffffff] font-dmsans'>Getting Inspired? Let's talk and craft something great together!</h1>
            <a href='/contactus' className='mx-auto'><button className='custombuttonwhite cursor-pointer px-10 py-3 bg-[#fff] rounded-full font-dmsans mt-10'>Contact Us</button></a>
        </div>
    </div>
  )
}
