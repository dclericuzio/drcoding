import React from 'react'

export default function banner3() {

    const card = [
        {img:'website', title: 'Website Development', subtitle: 'Website that tells your brand story', content:['Company Profile','Service Business','Restaurants', 'E-Commerce', 'Blogs']},
        {img:'mobile',title: 'Mobile App Development', subtitle: 'Digital products with good customer experience', content:['Business-to-Business (B2B)','Business-to-Consumer (B2C)']},
        {img:'enterprise',title: 'Enterprise Software', subtitle: 'Inventory Management Software', content:['Attendance/Staffing Records','Payroll', 'Inventory Software', 'POS software']},
    ]

  return (
    <div className='bg-[#ffffff] w-full py-20'>
        <div className='max-w-[1600px] w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333'>What we do</h1>
            <h1 className='text-[#666666] text-[14px] mt-3'>We help your business through digital product <br/> that are stand-alone or connect to physical products and services.</h1>
            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6'></div>
            <div className='min-h-fit w-full mx-auto'>
                <div className='mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 sm:gap-10'>
                    {card.map((cards, index)=>{
                        return(
                        <div key={index} className='w-full min-h-min h-fit bg-white rounded-[20px] test p-6'>
                            <div className='flex flex-col relative'>
                                <img src={`./service/${cards.img}.svg`} alt='...' className='absolute -top-[90px] w-[130px] h-[130px]'/>
                                {/* <div className='w-[100px] h-[100px] rounded-full bg-[#D9D9D9]'></div> */}
                                <h1 className='mt-[55px] font-[600] text-[18px] text-[#333333]'>{cards.title}</h1>
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
