import React from 'react'
import { useRouter } from "next/router";

function MobileNav({open, setOpen}) {

    const router = useRouter()
    return (
        <div className={`absolute z-50 top-0 left-0 min-h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <ul className="flex flex-col justify-center items-center mt-28 font-dmsans text-2xl font-bold space-y-8">
                <a href='/tentangkami'><li className={router.asPath == "/tentangkami" ? "border-b-[2px] border-[#000]" : ""}>Tentang Kami</li></a>
                <a href='/layanan'><li className={router.asPath == "/layanan" ? "border-b-[2px] border-[#000]" : ""}>Layanan</li></a>
                <a href='/kontak'><li className={router.asPath == "/kontak" ? "border-b-[2px] border-[#000]" : ""}>Kontak</li></a>
                <a href='/portofolio'><li className={router.asPath == "/portoflio" ? "border-b-[2px] border-[#000]" : ""}>Portofolio</li></a>
            </ul>  
        </div>
    )
}


export default function navigationBar() {

    const [open, setOpen] = React.useState(false)
    const router = useRouter()

  return (
    <nav className='w-full shadow-lg font-dmsans fixed z-50 bg-white'>
        <MobileNav open={open} setOpen={setOpen}/>
        <div className="max-w-7xl flex items-center justify-between mx-auto py-4 px-4">
            {/* <h1 className='items-center font-[700] text-2xl font-dmsans'>DANTE</h1> */}
            {/* <img src="./logo.png" className='h-8 md:h-12 w-auto' alt='logo'/> */}
            <a href='/'>
                <span className='outline outline-2 outline-offset-2'><span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span>
            </a>
            <>
                <ul className="hidden md:flex flex-row items-center space-x-8 text-md font-[500] cursor-pointer">
                    <a href="/tentangkami"><li className={router.asPath == "/tentangkami" ? "border-b-[2px] border-[#000]" : ""}>Tentang Kami</li></a>
                    <a href="/layanan"><li className={router.asPath == "/layanan" ? "border-b-[2px] border-[#000]" : ""}>Layanan</li></a>
                    <a href="/kontak"><li className={router.asPath == "/kontak" ? "border-b-[2px] border-[#000]" : ""}>Kontak</li></a>
                    <a href="/portofolio"><li className={router.asPath == "/portofolio" ? "border-b-[2px] border-[#000]" : ""}>Portofolio</li></a>
                </ul>  
            </>
            <a href='/kontak'><button className='hidden md:flex px-4 py-2 border-2 border-[#1a1a1a] text-md font-[500]'>Hubungi Kami</button></a>
            <div className="flex md:hidden group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center" onClick={() => { setOpen(!open) }}>
                <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5 bg-red-500" : "bg-black"}`} />
                <span className={`h-1 w-full rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full bg-black"}`} />
                <span className={`h-1 w-full rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5 bg-red-500" : "bg-black"}`} />
            </div>
        </div>
    </nav>
  )
}
