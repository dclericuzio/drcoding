import React from 'react'

export default function banner3() {

    const cards = [
        {icon: 'fa-regular fa-pen', title: 'Bebas kustomisasi', content: 'Klien dapat menyampaikan keinginannya dalam pembuatan aplikasi. Klien juga dapat menyesuaikan harga berdasarkan fitur yang di inginkan.'},
        {icon: 'fa-regular fa-hand-heart', title: 'Pemeliharaan sistem', content: 'DR CODING sangat peduli dengan layanan terhadap sistem yang telah di buat. Mulai dari pengawalan penggunaan, server dan bug.'},
        {icon: 'fa-regular fa-thumbs-up', title: 'Cocok untuk pemula', content: 'Skill khusus tidak dibutuhkan untuk menggunakan layanan kami. DR CODING memiliki layanan menganalisa bisnis anda untuk diterapkan ke aplikasi/web.'}
    ]

  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col lg:flex-row mx-auto'>
            <div className='lg:max-w-[50%] w-full text-center lg:text-start'>
                <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Jasa Pembuatan Aplikasi?</h1>
                <h1 className='text-[25px] sm:text-[30px] md:text-[35px] font-[700] text-black'>Kenapa<span className='ml-4 outline outline-2 outline-offset-4'><span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span> ?</h1>
            </div>
            <div className='lg:max-w-[50%] w-full text-center'>
                <h1 className='px-4 sm:ml-8 pt-10 font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>Menciptakan Layanan IT yang menyesuaikan dengan infrastruksur bisnis anda secara ekslusif dan menjangkau keinginan unik/khusus dari klien kami.</h1>
            </div>
        </div>
        <div className='max-w-7xl flex flex-wrap gap-6 mx-auto py-5 px-14 md:px-4 mt-10'>
            {cards.map((card, index) => (
                <div key={index} className='bg-white hover:bg-black hover:text-[#fff] drop-shadow-lg h-60 flex-[1_0_300px] mx-auto cursor-pointer hover:scale-105 duration-300 ease-out'>
                    <div className='h-full p-4 space-y-4 justify-center flex flex-col'>
                        <i class={`${card.icon} text-[40px] lg:text-[45px]`}></i>
                        <h1 className='font-[700] text-[16px]'>{card.title}</h1>
                        <h1 className='font-[400] text-[14px] text-[#7d7d7d]'>{card.content}</h1>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
