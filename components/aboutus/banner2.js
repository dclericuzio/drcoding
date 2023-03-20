import React from 'react'

export default function banner2() {
   
  return (
    <div className='w-full min-h-min py-28'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 lg:px-28'>
                <div className='text-center w-full mt-[]'>
                    <div className='flex flex-col md:flex-row md:space-x-8'>
                        <div className='w-full md:w-[calc(100%/2)] text-start'>
                            <h1 className='mt-3 md:mt-0 font-cormorant text-[40px] font-[500] text-[#333333]'>Our approach</h1>
                            <h1 className='mt-3 font-[400] text-[14px] sm:text-[16px] text-[#666666]'>As Creative Digital Lab we do our work through four cyclical stages that repeat to the first step once one cycle finishes.</h1>
                            <div className='my-6'>
                                <ul className='list-decimal marker:text-[#666666] ml-8 space-y-2'>
                                    <li><span className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>Discover</span></li>
                                    <h1 className='font-[400] text-[16px] text-[#666666]'>Finding insights from data and research</h1>
                                    <li><span className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>Define</span></li>
                                    <h1 className='font-[400] text-[16px] text-[#666666]'>Creating digital strategy and solution blueprint</h1>
                                    <li><span className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>Deliver</span></li>
                                    <h1 className='font-[400] text-[16px] text-[#666666]'>Developing solution and implementing media strategy</h1>
                                    <li><span className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>Deliver</span></li>
                                    <h1 className='font-[400] text-[16px] text-[#666666]'>Measuring the performance of our implementation</h1>
                                </ul>
                            </div>
                            <a href='#'><button className='custombutton1 cursor-pointer px-7 py-3 bg-[#f3f3f3] rounded-full font-dmsans mt-2'>Start project with us</button></a>
                        </div>
                        <div className='w-full md:w-[calc(100%/2)] mt-4 md:mt-0'>
                            <img src='./aboutus/approach.png' alt='...' className='mx-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
