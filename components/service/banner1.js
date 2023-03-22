import React from 'react'

export default function banner1() {
   
  return (
    <div className='w-full min-h-min pt-[230px]'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 lg:px-28'>
                <div className='text-center w-full mt-[]'>
                    <h1 className='text-[#333333] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant mx-auto md:leading-[80px]'>Our services</h1>
                    <h1 className='text-[#666666] max-w-[80%] mx-auto sm:max-w-md text-[14px] mt-8 leading-7 font-dmsans'>We will help you deliver your business value to your customer through website, application, or any software needs 🍻</h1>
                    <div className='h-[3px] w-[150px] bg-[#17A683] mt-6 mx-auto'></div>
                </div>
            </div>
        </div>
    </div>
  )
}
