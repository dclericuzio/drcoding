import React from 'react'

export default function banner2() {
  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col-reverse lg:flex-row mx-auto'>
            <div className='lg:max-w-[50%] w-full'>
                <img src='./about.svg' alt='...' className='w-full'/>
            </div>
            <div className='lg:max-w-[50%] w-full'>
                <h1 className='text-center lg:text-left pt-10 text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Tentang <span className='mx-2 outline outline-2 outline-offset-4'> <span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span> ?</h1>
                <h1 className='text-center lg:text-left px-4 lg:px-0 pt-10 mx-auto font-[400] text-[12px] sm:text-[14px] md:text-[16px] text-[#7d7d7d]'>DR CODING adalah sebuah vendor yang melayanani jasa pembuatan website, aplikasi mobile android, ios dan layanan IT lainnya. DR CODING menawarkan solusi dibidang IT khususnya website dan aplikasi yang dikerjakan oleh team yang terdiri dari developer berasal dari berbagai negara yang telah berpengalaman lebih dari 5 tahun di bidangnya.</h1>
                <div className='pt-10 flex flex-row justify-center lg:justify-start space-x-4'>
                    <i class="fa-regular fa-browser text-[40px] sm:text-[50px] fa-fw"></i>
                    <i class="fa-brands fa-android text-[40px] sm:text-[50px] fa-fw"></i>
                    <i class="fa-brands fa-apple text-[40px] sm:text-[50px] fa-fw"></i>
                    <i class="fa-solid fa-cart-shopping text-[40px] sm:text-[50px] fa-fw"></i>
                    <i class="fa-solid fa-boxes-stacked text-[40px] sm:text-[50px] fa-fw"></i>
                </div>
            </div>
        </div>
    </div>
  )
}
