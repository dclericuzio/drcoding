import React from 'react'

export default function banner2() {
   
    const text = [
        {num:'1', title:'Discover', content:'Understanding purpose and goals of your needs'},
        {num:'2', title:'Define', content:'Defining digital strategy and solutions'},
        {num:'3', title:'Deliver', content:'Implementing, testing, and delivering digital strategy and solutions'},
        {num:'4', title:'Maintenance', content:'Ensuring the smooth functionality and experience of the digital product'},
    ]

  return (
    <div className='w-full min-h-min pb-28 md:py-28'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 lg:px-28'>
                <div className='text-center w-full mt-[]'>
                    <div className='items-center flex flex-col md:flex-row md:space-x-8'>
                        <div className='w-full md:w-[calc(100%/2)] text-start'>
                            <h1 className='mt-3 md:mt-0 font-cormorant text-[40px] font-[500] text-[#333333]'>Our approach</h1>
                            <h1 className='mt-3 font-[400] text-[14px] sm:text-[16px] text-[#666666] leading-7'>As Creative Digital Lab we do our work through four cyclical stages that repeat to the first step once one cycle finishes.</h1>
                            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6'></div>
                            
                            <div className='my-6'>
                                <div className='flex flex-col gap-6'>
                                    {text.map((texts, index)=>{
                                        return(
                                            <div key={index} className='flex flex-row'>
                                                <div>
                                                    <div className='mt-[2px] w-[25px] h-[25px] bg-[#17A683] rounded-full justify-center items-center flex'>
                                                        <h1 className='text-[#f3f3f3] font-dmsans'>{texts.num}</h1>
                                                    </div>    
                                                </div>
                                                <div className='ml-8'>
                                                    <h1 className='font-[600] text-[18px] text-[#333333]'>{texts.title}</h1>
                                                    <h1 className='font-[400] text-[16px] text-[#666666] mt-4'>{texts.content}</h1>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-[calc(100%/2)] mt-4 md:mt-0'>
                            <img src='./aboutus/approach.png' alt='...' className='mx-auto'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
