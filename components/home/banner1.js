import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../../assets/lottie/developers-team.json'

export default function banner1() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col mx-auto'>
            <h1 className='mt-20 md:mt-32 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>#1 Jasa Pembuatan Website, Aplikasi Mobile Android dan iOS</h1>
            <h1 className='mt-5 mx-auto text-center text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Vendor Penyedia Jasa <br/> Aplikasi <span className='text-[#fff] font-[700] bg-black px-2 rounded-lg'>Web</span> dan <span className='text-[#fff] font-[700] bg-black px-2 rounded-lg'>Mobile</span> <br/> Terbaik di Jabodetabek</h1>
            <div className='my-14 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] mx-auto'>
                <Lottie options={defaultOptions}/>
            </div>
            <button className='mt-10 px-4 py-2 border-2 border-[#1a1a1a] text-md font-[500] w-fit mx-auto'><i class="fa-brands fa-whatsapp fa-lg"></i> Konsultasi Gratis</button>
            <h1 className='mt-4 mx-auto font-[400] text-[12px] text-[#7d7d7d]'>Hubungi kami via Whatsapp di +6281-858-9669</h1>
        </div>
    </div>
  )
}
