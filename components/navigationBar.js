import React from 'react'
import { useRouter } from "next/router";

function MobileNav({open, setOpen}) {

    const router = useRouter()
    return (
        <div className={`absolute z-50 top-0 left-0 min-h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <ul className="flex flex-col justify-center items-center mt-28 font-dmsans text-2xl font-bold space-y-8">
                <a href='/'><li className={router.asPath == "/" ? "border-b-[2px] border-[#000]" : ""}>Home</li></a>
                <a href='/aboutus'><li className={router.asPath == "/aboutus" ? "border-b-[2px] border-[#000]" : ""}>About Us</li></a>
                <a href='/service'><li className={router.asPath == "/service" ? "border-b-[2px] border-[#000]" : ""}>Service</li></a>
                <a href='/work'><li className={router.asPath == "/work" ? "border-b-[2px] border-[#000]" : ""}>Out Work</li></a>
                <a href='/contactus'><li className={router.asPath == "/contactus" ? "border-b-[2px] border-[#000]" : ""}>Contact Us</li></a>
            </ul>  
        </div>
    )
}


export default function navigationBar() {

    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    const [clientWindowHeight, setClientWindowHeight] = React.useState("");
    const [backgroundTransparacy, setBackgroundTransparacy] = React.useState(0);
    const [boxShadow, setBoxShadow] = React.useState(0);

    const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll); 
        return () => window.removeEventListener("scroll", handleScroll);
    });
    


    React.useEffect(() => {
        let backgroundTransparacyVar = clientWindowHeight / 300;

        if (backgroundTransparacyVar < 1) {
            
            let boxShadowVar = backgroundTransparacyVar * 0.1;
            setBackgroundTransparacy(backgroundTransparacyVar);
            
            setBoxShadow(boxShadowVar);
        }
        }, [clientWindowHeight]
    );

  return (
    <nav 
        className='w-full font-cormorant fixed z-50 bg-white shadow-lg py-2' 
        // style={{
        //     background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
        //     boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        // }}
    >
        <MobileNav open={open} setOpen={setOpen}/>
        <div className="max-w-full w-[90%] flex items-center justify-between mx-auto py-4">
            {/* <h1 className='items-center font-[700] text-2xl font-dmsans'>DANTE</h1> */}
            {/* <img src="./logo.png" className='h-8 md:h-12 w-auto' alt='logo'/> */}
            <a href='/'>
              <img src='./logo.png'/>
                {/* <span className='font-dmsans outline outline-2 outline-offset-2'><span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span> */}
            </a>
            <>
                <ul className="font-cormorant hidden md:flex flex-row items-center space-x-8 text-[16px] font-[600] cursor-pointer">
                    <a href="/"><li className={router.asPath == "/" ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent hover:border-[#000] duration-200 ease-in"}>Home</li></a>
                    <a href="/aboutus"><li className={router.asPath == "/aboutus" ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent hover:border-[#000] duration-200 ease-in"}>About Us</li></a>
                    <a href="/service"><li className={router.asPath == "/service" ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent hover:border-[#000] duration-200 ease-in"}>Service</li></a>
                    <a href="/work"><li className={router.asPath == "/work" ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent hover:border-[#000] duration-200 ease-in"}>Our Work</li></a>
                    <a href="/contactus"><li className={router.asPath == "/contactus" ? "border-b-[2px] border-[#000]" : "border-b-[2px] border-transparent hover:border-[#000] duration-200 ease-in"}>Contact Us</li></a>
                </ul>  
            </>
            {/* <a href='/kontak'><button className='hidden md:flex px-4 py-2 border-2 border-[#1a1a1a] text-md font-[500]'>Hubungi Kami</button></a> */}
            <div className="flex md:hidden group z-50 relative w-6 h-6 cursor-pointer flex-col justify-between items-center" onClick={() => { setOpen(!open) }}>
                <span className={`h-1 w-full rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5 bg-red-500" : "bg-black"}`} />
                <span className={`h-1 w-full rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full bg-black"}`} />
                <span className={`h-1 w-full rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5 bg-red-500" : "bg-black"}`} />
            </div>
        </div>
    </nav>
  )
}
