import React from 'react'
import SideNavigationBar from '../components/sideNavigationBar'

export default function landingpage({children}) {
    return (
      <>
        <main>
          <div className='relative flex flex-row'>
            <SideNavigationBar/>
            {children}
            
            {/* <a className='cursor-pointer fixed right-[40px] z-50 bottom-[40px] shadow-customwa text-center w-[50px] h-[50px] bg-[#25d366]' href='https://wa.me/62811950072'>
              <i class="fa-brands fa-whatsapp text-[#fff] text-[30px] mt-[9px]"></i>
            </a> */}
          </div>
        </main>
      </>
    )
  }
  