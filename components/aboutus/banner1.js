import React from 'react'

export default function banner1() {
   
  return (
    <div className='w-full min-h-min pt-[230px]'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 lg:px-28'>
                <div className='text-center w-full'>
                    <h1 className='text-[#333333] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant mx-auto md:leading-[80px]'>A great solution for you</h1>
                    <div className='flex flex-col md:flex-row md:space-x-8 mt-[80px] md:mt-[150px]'>
                        <div className='w-full md:w-[calc(100%/2)]'>
                            <img src='./aboutus/banneraboutus.png' alt='...' className=''/>
                        </div>
                        <div className='w-full md:w-[calc(100%/2)] text-start'>
                            <h1 className='mt-3 md:mt-0 font-cormorant text-[40px] font-[500] text-[#333333]'>Our story</h1>
                            <div className='min-h-[280px] md:h-[300px] lg:h-[280px] overflow-hidden scrollbar overflow-y-auto'>
                                <h1 className='mt-3 font-[400] text-[14px] sm:text-[16px] text-[#666666]'>Welcome to DR CODING, where our top priority is providing exceptional service to our customers. We are website and application developer with more than 3+ years of experience and a reputation for delivering high-quality results.</h1>
                                <h1 className='mt-3 font-[400] text-[14px] sm:text-[16px] text-[#666666]'>At DR CODING, we understand the importance of providing our customers with the best possible experience. Our team of experts are dedicated to delivering strong online presence for your business.</h1>
                                <h1 className='mt-3 font-[400] text-[14px] sm:text-[16px] text-[#666666]'>We believe that Usability, Accessibility, and Security is the foundation of a successful business and strive to embody this in all that we do. Whether you need personalized website, adding more features to your existing application, or simply have questions, our knowledgeable staff is here to help.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
