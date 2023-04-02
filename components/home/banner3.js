import React from 'react'

export default function banner3() {

  const porto = [
    {img:'houseplant.png', company:'House Plant Hub', type:'Company Website'},
    {img:'kayoo.png', company:'Kayoo', type:'Company Website'},
    {img:'eck.png', company:'East Cruise', type:'Company Website'}
]

  return (
    <div className='bg-white w-full py-20'>
        <div className='max-w-[1600px] w-full md:w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333] text-center'>Featured works</h1>
            <h1 className='text-[#666666] text-[14px] text-center mt-3'>Here are some of our collaboration with our partners</h1>
            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6 mx-auto'></div>

            <img src='./home/houseplant.png' alt='houseplant' className='hidden md:flex md:w-[60%] mx-auto mt-16'/>
            <img src='./home/kayoo.png' alt='houseplant' className='hidden md:flex md:w-[60%] mx-auto mt-16'/>
            <img src='./home/eck.png' alt='houseplant' className='hidden md:flex md:w-[60%] mx-auto mt-16'/>

            {porto.map((portos, index)=>{
              return(
                <div key={index} className='flex md:hidden mt-16'>
                  <div className='flex flex-col'>
                      <img src={`./work/${portos.img}`} alt='houseplant' className='rounded-0 md:rounded-[20px]'/>
                      <div className='flex flex-row justify-between mt-4 md:px-0 px-2'>
                          <h1 className='font-[600] text-[16px] text-[#333333]'>{portos.company}</h1>
                          <h1 className='font-[400] text-[16px] text-[#666666]'>{portos.type}</h1>
                      </div>
                  </div>
                </div>
              )
            })}

            <a href='/work' className='mx-auto'><button className='custombuttongreen cursor-pointer px-7 py-3 rounded-full font-dmsans mt-16'>See our works</button></a>


        </div>
    </div>
  )
}
