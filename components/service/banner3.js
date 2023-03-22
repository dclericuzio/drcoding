import React from 'react'

export default function banner3() {

    const card = [
        {title: 'Website Development', subtitle: 'Website that tells your brand story', content:['Corporate Website','E-commerce Website','Travel Website']},
        {title: 'Mobile App Development', subtitle: 'Digital products with good customer experience', content:['Business to customer','Business to business']},
        {title: 'Enterprise Software', subtitle: 'Human-centered enterprise software for your business', content:['Inventory software','Management software']},
    ]

  return (
    <div className='bg-[#ffffff] w-full py-20'>
        <div className='max-w-[1600px] w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333'>What we do</h1>
            <h1 className='text-[#666666] text-[14px] mt-3'>We help your business through digital product <br/> that are stand-alone or connect to physical products and services.</h1>
            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6'></div>
            <div className='min-h-fit w-full mx-auto'>
                <div className='mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
                    {card.map((cards, index)=>{
                        return(
                        <div key={index} className='w-full min-h-[350px] h-fit bg-white rounded-[20px] test p-6'>
                            <div className='flex flex-col'>
                                <div className='w-[100px] h-[100px] rounded-full bg-[#D9D9D9]'></div>
                                <h1 className='mt-5 font-[600] text-[18px] text-[#333333]'>{cards.title}</h1>
                                <h1 className='mt-5 max-w-[80%] font-[400] text-[16px] text-[#5B5F6A]'>{cards.subtitle}</h1>
                                <ul className='ml-4 mt-2 list-disc marker:text-[#5B5F6A]'>
                                    {cards.content.map((contents, index)=>{
                                        return <li className='text-[16px] text-[#5B5F6A]' key={index}>{contents}</li>
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
