import React from 'react'

export default function banner2() {

    const point = [
        {img:'allinone', title:'Your all-in-one Services', content:'We integrate our research, design, and engineering to deliver engaging digital product so you can build and scale your business with confidence.'},
        {img:'easy', title:'Your Platform, Your Way', content:'Explore which features you want to add to your platform - whether creating your own online store, service businesses, blogs, or adding your favorite third-party extensions.'},
        {img:'market', title:'Market your business', content:'Manage your business like a pro. We‘ll help you to capture leads, get reports and insights to retain customers and grow your audience.'},
    ]

  return (
    <div className='w-full min-h-min pb-16 max-w-[1600px] mx-auto'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 md:px-16 lg:px-28'>
                <div className='text-center w-full mt-[]'>
                    <div className='flex flex-col md:flex-row md:space-x-8 mt-[80px] md:mt-[150px]'>
                        <div className='w-full md:w-[40%] mt-0 md:mt-16 flex flex-col'>
                            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333] text-start'>Elevate your business where it needs to go.</h1>
                            <h1 className='text-[#666666] text-start text-[14px] mt-4  leading-7 font-dmsans'>Sit back as our expert team builds your platform you'll fall in love with. From single page site to full-blown e-commerce site or application, we'll help you to make it happen, quickly.</h1>
                            <div className='h-[3px] w-[150px] bg-[#17A683] mt-6'></div>      
                        </div>
                        
                        <div className='w-full md:w-[60%] md:mt-0 mt-8'>
                            <div className='flex flex-col mt-0 space-y-12 md:ml-10'>
                                {point.map((points, index)=>{
                                    return(
                                        <div className='flex flex-row items-center' key={index}>
                                            <div className=''>
                                                <img src={`./home/${points.img}.svg`} alt='...' className='w-[150px] h-[130px] m-2'/>
                                            </div>
                                            <div className='ml-4  flex flex-col font-dmsans text-start leading-7'>
                                                <h1 className='font-[600] text-[18px] text-[#333333] mt-2'>{points.title}</h1>
                                                <h1 className='font-[400] text-[14px] text-[#666666]'>{points.content}</h1>
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

   
  )
}
