import React from 'react'

export default function banner3() {

    const card = [
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {title: 'Website Development', subtitle: 'Website for any of your business needs', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
    ]

  return (
    <div className='w-full pt-28 md:pt-56 pb-20'>
        <div className='flex flex-col max-w-full mx-auto'>
            <div className='w-full h-fit px-4'>
                <div className='text-center w-full mt-[]'>
                    <h1 className='font-cormorant text-[40px] font-[500] text-[#333333]'>What we do</h1>
                    <h1 className='text-[#666666] text-[14px]'>Tell us what you need, and we will help you with the best solutions.</h1>
                    <h1 className='text-[#666666] text-[14px]'>Use your resources to grow your business, worry no more!</h1>
                </div>
                <div className='mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-28 gap-10'>
                    {card.map((cards, index)=>{
                        return(
                        <div key={index} className='w-full min-h-[350px] h-fit bg-white rounded-[20px] drop-shadow-lg shadow-lg p-6'>
                            <div className='flex flex-col'>
                                <div className='w-[100px] h-[100px] rounded-full bg-[#D9D9D9]'></div>
                                <h1 className='mt-5 font-[600] text-[16px] sm:text-[18px] text-[#333333]'>{cards.title}</h1>
                                <h1 className='mt-5 max-w-[80%] font-[400] text-[14px] text-[#666666]'>{cards.subtitle}</h1>
                                <ul className='mt-2 list-disc marker:text-[#333]'>
                                    {cards.content.map((contents, index)=>{
                                        return <li className='text-[14px] text-[#666666]' key={index}>{contents}</li>
                                    })}
                                </ul>
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
