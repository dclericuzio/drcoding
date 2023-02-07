import React from 'react'

export default function footer() {
  return (
    <div className='w-full font-dmsans pt-24 bg-[#fff] shadow-lg'>
        <div className='max-w-2xl flex flex-col mx-auto'>
            <div className='mx-auto'>
                <span className='text-[30px] mx-2 outline outline-2 outline-offset-4'> <span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span>
            </div>
            <h1 className='pt-8 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>#1 Jasa Pembuatan Aplikasi Kustom</h1>
            <h1 className='pt-4 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#000]'>Jasa Pembuatan Aplikasi Web dan Mobile yang berfokus pada pengembangan bisnis anda. Hubungi kami untuk berkonsultasi</h1>
            <div className='flex pt-8 space-x-4 justify-center'>
                <i class="fa-brands fa-facebook text-[30px] fa-fw"></i>
                <i class="fa-brands fa-instagram text-[30px] fa-fw"></i>
                <i class="fa-brands fa-whatsapp text-[30px] fa-fw"></i>
                <i class="fa-regular fa-envelope text-[30px]"></i>
                <i class="fa-solid fa-map-pin text-[30px] fa-fw"></i>
            </div>
            <h1 className='text-center pt-24 pb-4'>© 2023 DR CODING. All Rights Resever By DR CODING Team</h1>
        </div>
    </div>
  )
}
