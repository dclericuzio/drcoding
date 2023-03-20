import React from 'react'

export default function banner4() {

    const card=[
        {img:'web-development.svg', title:'Website Development', list:['Corporate Website','Travel Website','E-Commerce Website','Management Website','Inventory Website','Custom Website']},
        {img:'app-development.svg', title:'Mobile App Development', list:['Corporate App','Travel App','E-Commerce App','Management App','Inventory App','Custom App']},
    ]

  return (
    <div className='w-full py-20'>
        <div className='flex flex-col max-w-full w-[90%] mx-auto'>
            <div className='flex flex-col'>
                <h1 className='mx-auto font-cormorant text-[40px] font-[500] text-[#333333]'>What we do</h1>
                <h1 className='mx-auto text-[#666666] text-[14px]'>Tell us what you need, and we will help you with the best solutions.</h1>
                <h1 className='mx-auto text-[#666666] text-[14px]'>Use your resources to grow your business, worry no more!</h1>
                <div className='flex flex-col md:flex-row mt-10 md:space-x-8 space-y-8 md:space-y-0 '>
                    {card.map((cards, index)=>{
                        return(
                            <div key={index} className='flex bg-[#d9d9d9] bg-opacity-50 backdrop-blur-xl w-full md:w-[50%] min-h-fit rounded-[20px] cursor-pointer hover:scale-105 transform transition duration-300 ease-out justify-center'>
                                <div className='w-[85%] md:w-[95%] flex flex-col font-dmsans p-4'>
                                    <img src={`./home/${cards.img}`} className='w-[70px] mx-auto'/>
                                    <h1 className='font-[600] text-[16px] sm:text-[18px] text-[#333333] mx-auto mt-4'>{cards.title}</h1>
                                    <div className='grid grid-cols-2 gap-4 mt-4'>
                                        {cards.list.map((lists,index)=>{
                                            return <h1 key={index} className='font-[400] text-[14px] sm:text-[16px] text-[#666666]'>{lists}</h1>
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
