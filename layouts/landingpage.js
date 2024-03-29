import React from 'react'
import NavigationBar from '../components/navigationBar'
import Footer from '../components/footer'

export default function landingpage({children}) {
    return (
      <>
        <main>
          <div className='relative'>
            <NavigationBar/>
            {children}
            
            <a className='cursor-pointer fixed right-[40px] z-50 bottom-[40px] shadow-customwa text-center w-[50px] h-[50px] bg-[#25d366]' href='https://wa.me/62818589669?text=Hi%20DRCoding,%20i%20want%20to%20know%20more%20about%20the%20serivce.'>
              <i class="fa-brands fa-whatsapp text-[#fff] text-[30px] mt-[9px]"></i>
            </a>
          </div>
        </main>
        <Footer/>
      </>
    )
  }
  