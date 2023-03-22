import React from 'react'
import CounterNew from "../counter";

export default function banner4() {
    const datas = [
        {
          startNum: 0,
          endNum: 5,
          text: "Years Experience",
          duration: 3,
          delay: 8
        }
      ]
    
      const datas2 = [
        {
          startNum: 0,
          endNum: 50,
          text: "Clients",
          duration: 3,
          delay: 8
        },
        {
          startNum: 0,
          endNum: 100,
          text: "Projects",
          duration: 3,
          delay: 8
        }
      ]
  return (
    <div className='w-full font-dmsans'>
        <div className='bg-custombggrey py-10'>
            <div className='max-w-[1600px] whitespace-nowrap w-[70%] flex flex-col md:flex-row mx-auto justify-between'>
                {datas.map((data, i) => (
                    <div className='items-center justify-center flex flex-col p-4'>
                        <CounterNew data={data} key={i}/>
                        <h1 className='text-center font-[400] text-[14px] md:text-[20px] text-[#7d7d7d]'>{data.text}</h1>
                    </div>
                ))}
                 {datas2.map((data, i) => (
                    <div className='items-center justify-center flex flex-col p-4'>
                        <div className='flex items-center'><CounterNew data={data} key={i}/><span className='ml-2 text-[50px]'>+</span></div>
                        <h1 className='text-center font-[400] text-[14px] md:text-[20px] text-[#7d7d7d]'>{data.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}