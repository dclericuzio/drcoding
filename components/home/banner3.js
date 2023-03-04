import React from 'react'

export default function banner3() {

    const point = [
        {fa:'fa-check', title:'User Friendly', content:'No need to worry with overwhelming things as you thought, because it’s easy peasy to use our tools'},
        {fa:'fa-gears', title:'Integrated Solutions', content:'Let’s talk about what your business need about IT. Then we will find the best and integrated solutions. Psst..No need to worry about pricing things, because we are here to talk.'},
        {fa:'fa-screwdriver-wrench', title:'System Maintenance', content:'Let’s talk about what your business need about IT. Then we will find the best and integrated solutions. Psst..No need to worry about pricing things, because we are here to talk.'},
    ]

  return (
    <div className='bg-white w-full py-20'>
        <div className='max-w-full w-[90%] flex flex-col mx-auto'>
            <h1 className='font-cormorant text-[40px] font-[500] text-[#333333]'>Why DR Coding?</h1>
            <h1 className='text-[#666666] text-[14px]'>Tell us what you need, and we will help you with the best solutions.</h1>
            <h1 className='text-[#666666] text-[14px]'>Use your resources to grow your business, worry no more!</h1>

            <div className='flex flex-col mt-10 space-y-6'>
                {point.map((points, index)=>{
                    return(
                        <div className='flex flex-row items-center gap-4' key={index}>
                            <div className='w-[50px] h-[50px] flex justify-center items-center m-2 bg-[#d9d9d9] rounded-full'>
                                <i class={`fa-regular ${points.fa} justify-center text-[20px] text-[#333333]`}></i>
                            </div>
                            <div className='w-[85%] md:w-[95%] flex flex-col font-dmsans'>
                                <h1 className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>{points.title}</h1>
                                <h1 className='font-[400] text-[14px] sm:text-[16px] text-[#666666]'>{points.content}</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
    // <div className='w-full font-dmsans pb-32 lg:pb-44'>
    //     <div className='max-w-7xl flex flex-col lg:flex-row mx-auto'>
    //         <div className='lg:max-w-[50%] w-full text-center lg:text-start'>
    //             <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Jasa Pembuatan Aplikasi?</h1>
    //             <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-[700] text-black'>Kenapa<span className='ml-4 outline outline-2 outline-offset-4'><span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span> ?</h1>
    //         </div>
    //         <div className='lg:max-w-[50%] w-full text-center'>
    //             <h1 className='px-4 sm:ml-8 pt-10 font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>Menciptakan Layanan IT yang menyesuaikan dengan infrastruksur bisnis anda secara ekslusif dan menjangkau keinginan unik/khusus dari klien kami.</h1>
    //         </div>
    //     </div>
    //     <div className='max-w-7xl flex flex-wrap gap-6 mx-auto py-5 px-14 md:px-4 mt-10'>
    //         {cards.map((card, index) => (
    //             <div key={index} className='bg-white hover:bg-black hover:text-[#fff] drop-shadow-lg h-60 flex-[1_0_300px] mx-auto cursor-pointer hover:scale-105 duration-300 ease-out'>
    //                 <div className='h-full p-4 space-y-4 justify-center flex flex-col'>
    //                     <i class={`${card.icon} text-[40px] lg:text-[45px]`}></i>
    //                     <h1 className='font-[700] text-[16px]'>{card.title}</h1>
    //                     <h1 className='font-[400] text-[14px] text-[#7d7d7d]'>{card.content}</h1>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
  )
}
