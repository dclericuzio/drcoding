import React from 'react'

export default function banner2() {

    const porto = [
        {img:'houseplant.png', company:'House Plant Hub', type:'Company Website'},
        {img:'eck.png', company:'East Cruise', type:'Company Website'},
        {img:'kayoo.png', company:'Kayoo', type:'Company Website'},
        {img:'sar.png', company:'PT SAR INTERNATIONAL', type:'Company Website'},
        {img:'ibm.png', company:'Indonesia Bisnis Mandiri', type:'Company Website'},
        {img:'jsk.png', company:'JAYA SAMUDRA KARUNIA GROUP', type:'Company Website'},
        {img:'easycash.png', company:'PT Indonesia Fintopia Technology', type:'Company Website'},
    ]
  return (
    <div className='w-full pt-28 md:pt-32'>
        <div className='max-w-[1600px] lg:w-[90%] mx-auto lg:px-28'>
            <div className='gap-8 grid grid-cols-1 md:grid-cols-2 md:p-4'>
                {porto.map((portos, index)=>{
                    return(
                        <div key={index} className='flex flex-col'>
                            <img src={`./work/${portos.img}`} alt='houseplant' className='rounded-0 md:rounded-[20px]'/>
                            <div className='flex flex-row justify-between mt-4 md:px-0 px-2'>
                                <h1 className='font-[600] text-[16px] text-[#333333]'>{portos.company}</h1>
                                <h1 className='font-[400] text-[16px] text-[#666666]'>{portos.type}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
