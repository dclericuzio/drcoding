import React from 'react'

export default function banner2() {

    const card = [
        {title:'Consultation',content:'Lets have a great discussion to find your business need, until turn it out into solution through design process'},
        {title:'Development',content:'Lets have a great discussion to find your business need, until turn it out into solution through design process'},
        {title:'Maintenance',content:'Lets have a great discussion to find your business need, until turn it out into solution through design process'}
    ]
  return (
    <div className='w-full pt-28 md:pt-40'>
        <div className='flex flex-col max-w-full w-[90%] mx-auto'>
            <div className='flex flex-row mx-auto gap-4 relative'>
                {card.map((cards, index)=>{
                    return(
                        <div key={index} className='w-full flex flex-col text-center items-center gap-4'>
                            <div className='w-[100px] h-[100px] rounded-full bg-[#D9D9D9]'></div>
                            <h1 className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>{cards.title}</h1>
                            <h1 className='max-w-[80%] font-[400] text-[14px] sm:text-[16px] text-[#666666]'>{cards.content}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}
