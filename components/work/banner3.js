import React from 'react'

export default function banner3() {
  return (
    <div className='bg-customshade w-full py-36'>
        <div className='py-10'>
            <div className='max-w-[1600px] mx-auto'>
                <h1 className='px-4 md:px-0 font-cormorant w-full md:w-[60%] lg:w-[40%] text-center mx-auto text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-[#333333]'>“DR Coding helped me to have better product showcase for my business, especially in targeting a more specific market.”</h1>
                <div className='flex flex-row justify-center items-center mt-14 gap-4'>
                    {/* <div className='h-[65px] w-[65px] rounded-full bg-[#D9D9D9]'></div> */}
                    <div className='flex flex-col'>
                        <h1 className='font-[600] text-[18px] text-[#333333] font-dmsans'>Handy Wicaksono</h1>
                        <h1 className='font-[400] text-[16px] text-[#666666] font-dmsans'>CEO of House Plant</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
