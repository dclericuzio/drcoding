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
    <div className='w-full min-h-min pt-16'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='whitespace-nowrap ease-linear transition-all duration-1000'>
                <img src="./home/bannerhome.webp" className='h-[800px] w-full object-cover inline-block'/>
            </div>
            <div className='absolute w-full h-[650px] md:h-[750px] px-4 lg:px-28'>
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full'>
                    <h1 className='text-[#f3f3f3] max-w-[70%] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant mx-auto md:max-w-sm md:leading-[80px]'>We help you do your job</h1>
                    <h1 className='text-[#f3f3f3] max-w-[80%] mx-auto sm:max-w-md text-[14px] mt-8 md:leading-[25px] font-dmsans'>We will help you deliver your business value to your customer through website, application, or any software needs 🍻</h1>
                    <a href='/work'><button className='custombutton1 cursor-pointer px-7 py-3 bg-[#f3f3f3] rounded-full font-dmsans mt-10'>See what we do</button></a>
                </div>
            </div>
            {/* <div className='flex flex-col h-full'>
                <div className='whitespace-nowrap absolute top-1/2 text-center'>
                    <h1 className='text-[#fff] text-[72px]'>We help you do your job</h1>
                    <h1 className='text-[#fff] text-[14px]'>We will help you deliver your business value to your customer through website, application, or any software needs</h1>
                </div>
                
            </div> */}
            {/* <h1 className='mt-36 md:mt-52 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>#1 Jasa Pembuatan Website, Aplikasi Mobile Android dan iOS</h1>
            <h1 className='mt-5 mx-auto text-center text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Vendor Penyedia Jasa <br/> Aplikasi <span className='text-[#fff] font-[700] bg-black px-2 rounded-lg'>Web</span> dan <span className='text-[#fff] font-[700] bg-black px-2 rounded-lg'>Mobile</span> <br/> Terbaik di Jabodetabek</h1>
            <h1 className='mt-10 max-w-[530px] mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>Konsultasi gratis dengan tim spesialis kami. Tentang Jasa Pembuatan software atau Aplikasi, Pembuatan Website, Konsultan IT</h1>
            <div className='my-14 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] mx-auto'>
                <Lottie options={defaultOptions}/>
            </div>
            <button className='mt-10 px-4 py-2 border-2 border-[#1a1a1a] text-md font-[500] w-fit mx-auto'><i class="fa-brands fa-whatsapp fa-lg"></i> Konsultasi Gratis</button>
            <h1 className='mt-4 mx-auto font-[400] text-[12px] text-[#7d7d7d]'>Hubungi kami via Whatsapp di +6281-858-9669</h1> */}
        </div>
    </div>
  )
}