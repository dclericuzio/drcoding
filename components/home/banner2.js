import React from 'react'

export default function banner2() {

    const work =[
        {title: 'East Cruise', content: 'Travel Web', image: './1.png'},
        {title: 'House Plant', content: 'Travel Web', image: './1.png'},
        {title: 'CV IBM', content: 'Corporate Web', image: './1.png'},
        {title: 'PT Sar International', content: 'Corporate Web', image: './1.png'},
        {title: 'KAYOO', content: 'Landing Page', image: './1.png'}
    ]

  return (
    <div className='bg-[#ffffff] w-full py-20'>
        <div className='max-w-full w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333'>Featured works</h1>

            <div className='min-h-fit w-full mx-auto mt-10'>
                <div className=' overflow-y-hidden snap-x flex space-x-3 overflow-scroll scrollbar-hide p-3'>
                    {work.map((works, index) => {
                        return(
                            <div key={index} className="bg-[#d9d9d9] bg-opacity-50 backdrop-blur-xl rounded-[20px] cursor-pointer hover:scale-105 transform transition duration-300 ease-out justify-center flex">
                                <div className='flex flex-col md:p-4'>
                                    <h1 className='text-center font-[700] text-[25px] text-[#333333'>{works.title}</h1>
                                    <h1 className='text-center font-[400] text-[14px] text-[#666666'>{works.content}</h1>
                                    <div className="relative w-[390px]">
                                        <img src={`${works.image}`} alt='...' className='h-[250px] snap-center'/>
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
