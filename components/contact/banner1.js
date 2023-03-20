import React from 'react'

export default function banner1() {
   
  return (
    <div className='w-full min-h-min py-16'>
        <div className='max-w-full w-full flex flex-col mx-auto'>
            <div className='w-full h-fit px-4 md:px-16 lg:px-28'>
                <div className='text-center w-full mt-[]'>
                    <div className='flex flex-col md:flex-row md:space-x-8 mt-[80px] md:mt-[150px]'>
                        <div className='w-full md:w-[50%] flex flex-col mt-20'>
                            <h1 className='md:w-[70%] text-center md:text-start text-[#333333] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant md:leading-[80px]'>Let's talk about your business?</h1>
                            <h1 className='md:w-[50%] text-[#666666] text-center md:text-start text-[14px] mt-4 md:mt-8 md:leading-[25px] font-dmsans'>Let’s have some talk and make something great together!</h1>
                        </div>
                        <div className='pt-8 md:pt-0 px-4 md:px-0 w-full md:w-[50%]'>
                            <form className='flex flex-col space-y-10'>
                                <label className= "relative w-full">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Name:</h1>
                                    <input required type="text" className="w-full rounded-[5px] p-2 bg-[#F2F2F2] focus:border-[#088466]" name='name'/>
                                </label>
                                <label className= "relative w-full">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Email:</h1>
                                    <input required type="text" className="w-full rounded-[5px] p-2 bg-[#F2F2F2] focus:border-[#088466]" name='email'/>
                                </label>
                                <label class="w-full">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Type of project</h1>
                                    <select name='project' className='w-full rounded-[5px] p-2 bg-[#F2F2F2] focus:border-[#088466]'>
                                        <option hidden>Select projects</option>
                                        <option value={'web'}>Website</option>
                                        <option value={'app'}>Mobile App</option>
                                    </select>
                                </label>
                                <label className= "relative">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Leave us a message, please :)</h1>
                                    <textarea required className="w-full h-32 bg-[#F2F2F2] focus:border-[#088466] rounded-[5px] p-2" name='message' placeholder='Tell us about your problem so we can help you'/>
                                </label>
        
                                <button className='text-white custombutton1 cursor-pointer px-7 py-3 bg-[#088466] rounded-full font-dmsans mt-10 w-[30%]'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}