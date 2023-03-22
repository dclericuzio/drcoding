import React from 'react'

export default function banner3() {


  return (
    <div className='bg-white w-full py-20'>
        <div className='max-w-full w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333] text-center'>Featured works</h1>
            <h1 className='text-[#666666] text-[14px] text-center mt-3'>Here are some of our collaboration with our partners</h1>
            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6 mx-auto'></div>

            <img src='./home/houseplant.png' alt='houseplant' className='md:w-[60%] mx-auto mt-16'/>
            <img src='./home/kayoo.png' alt='houseplant' className='md:w-[60%] mx-auto mt-16'/>
            <img src='./home/eastcruise.png' alt='houseplant' className='md:w-[60%] mx-auto mt-16'/>

            <a href='/work' className='mx-auto'><button className='custombuttongreen cursor-pointer px-7 py-3 rounded-full font-dmsans mt-16'>See our works</button></a>


        </div>
    </div>
  )
}
