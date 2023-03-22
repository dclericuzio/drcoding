import React from 'react'

export default function footer() {
  return (
    <div className='w-full font-dmsans py-16 bg-[#048667] shadow-lg'>
        <div className='max-w-full w-full md:w-[90%] flex flex-col md:flex-row items-center justify-between md:mx-auto'>
            <div className='flex flex-col'>
              <img src='./logo.png' className='w-40'/>
                {/* <span className='text-[30px] mx-2 outline outline-2 outline-offset-4 bg-white'> <span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span> */}
                <h1 className='md:block hidden text-center text-[14px] text-[#f3f3f3]'>© 2023 DR CODING. All Rights Resever By DR CODING Team</h1>
            </div>
            <div className='flex space-x-4 justify-center my-5 md:my-0'>
                <i class="fa-brands fa-facebook text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i>
                <i class="fa-brands fa-instagram text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i>
                <i class="fa-solid fa-map-pin text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i>
                {/* <i class="fa-brands fa-whatsapp text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i>
                <i class="fa-regular fa-envelope text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i>
                <i class="fa-solid fa-map-pin text-[30px] fa-fw text-[#f3f3f3] cursor-pointer"></i> */}
            </div>
            <h1 className='md:hidden block text-center text-[12px] sm:text-[14px] text-[#f3f3f3]'>© 2023 DR CODING. All Rights Reseved By DR CODING Team</h1>
        </div>
    </div>
  )
}
