import React from 'react'

export default function banner2() {
    const text = [
        {num:'1', title:'Consultation', content:'Let’s have a great discussion to find your business needs, until turn it out into solution through design process'},
        {num:'2', title:'Development', content:'Not only aesthetically pleasing, we also deliver good quality product'},
        {num:'3', title:'Maintenance', content:'Everything in the world require maintenance, doesn’t it? Don’t worry we got you!'}
    ]
  return (
    <div className='w-full min-h-min mt-28 mb-16 md:py-28'>
    <div className='max-w-[1600px] w-full flex flex-col mx-auto'>
        <div className='w-full h-fit px-4 lg:px-28'>
            <div className='text-center w-full mt-[]'>
                <div className='items-center flex flex-col md:flex-row md:space-x-8'>
                    <div className='w-full md:w-[calc(100%/2)] mt-4 md:mt-0'>
                        <img src='./service/servicebanner.png' alt='...' className='mx-auto'/>
                    </div>
                    <div className='mt-8 md:mt-0 w-full md:w-[calc(100%/2)] text-start'>
                        <div className='my-0'>
                            <div className='flex flex-col gap-6'>
                                {text.map((texts, index)=>{
                                    return(
                                        <div key={index} className='flex flex-row'>
                                            <div className='w-[10%]'>
                                                <div className='mt-[2px] w-[25px] h-[25px] bg-[#17A683] rounded-full justify-center items-center flex'>
                                                    <h1 className='text-[#f3f3f3] font-dmsans'>{texts.num}</h1>
                                                </div>
                                            </div>
                                            <div className='w-[90%]'>
                                                <div className=''>
                                                    <h1 className='font-[600] text-[18px] text-[#333333]'>{texts.title}</h1>
                                                    <h1 className='font-[400] text-[16px] text-[#666666] mt-4'>{texts.content}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
