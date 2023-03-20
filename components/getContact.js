import React from 'react'

export default function getContact() {
  return (
    <div className='w-full font-cormorant py-20 bg-customshade1'>
        <div className='flex flex-col mx-auto'>
            <h1 className='px-4 text-center mx-auto text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-[#ffffff]'>Got some problems that need to be solved?</h1>
            <h1 className='pt-4 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#ffffff]'>Don’t hesitate to talk to us, let’s grab some coffee!</h1>
            <a href='/contactus' className='mx-auto'><button className='custombutton1 cursor-pointer px-10 py-3 bg-[#fff] rounded-full font-dmsans mt-10'>Contact Us</button></a>
        </div>
    </div>
  )
}
