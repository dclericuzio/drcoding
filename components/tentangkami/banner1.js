import React from 'react'
import CounterNew from "../counter";

export default function banner1() {
    const datas = [
        {
          startNum: 0,
          endNum: 5,
          text: "Tahun Berpengalaman",
          duration: 3,
          delay: 2
        }
      ]
    
      const datas2 = [
        {
          startNum: 0,
          endNum: 50,
          text: "Klien",
          duration: 3,
          delay: 2
        },
        {
          startNum: 0,
          endNum: 100,
          text: "Proyek",
          duration: 3,
          delay: 2
        }
      ]
  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col mx-auto'>
            <h1 className='mt-36 md:mt-52 px-4 mx-auto text-center text-[40px] sm:text-[50px] md:text-[70px] font-[500] text-black'>Solusi dari<br/> <span className='text-[#fff] font-[700] bg-black px-2 rounded-lg'>Kebutuhan Anda</span> </h1>
            <h1 className='my-10 max-w-[630px] mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>Terbentuk di 2018, DR CODING adalah tim spesialis pembuatan website, aplikasi dan insfraktuktur IT lainnya.</h1>
            <img src='./tentangkami/tentangkamibanner.jpg' alt='...' className='my-10 max-w-3xl mx-auto rounded-2xl'/>
        </div>

        <div className='bg-[#F5F5F5] my-10 py-4'>
            <div className='max-w-2xl flex flex-row mx-auto justify-between'>
                {datas.map((data, i) => (
                    <div className='items-center justify-center flex flex-col p-4'>
                        <CounterNew data={data} key={i}/>
                        <h1 className='text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>{data.text}</h1>
                    </div>
                ))}
                 {datas2.map((data, i) => (
                    <div className='items-center justify-center flex flex-col p-4'>
                        <div className='flex items-center'><CounterNew data={data} key={i}/><span className='ml-2 text-[50px]'>+</span></div>
                        <h1 className='text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>{data.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
