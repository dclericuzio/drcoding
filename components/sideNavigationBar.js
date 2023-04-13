import React from 'react'
import nookies from 'nookies'
import { useRouter } from 'next/router';


export async function getServerSideProps(ctx){

    const cookies = nookies.get(ctx)
  
    const token = cookies.token;
  
    if(!token){
  
      return{
          redirect:{
              destination: '/admin/login'
          }
      }
    }
    
  
      return{
          props:{}
      }
}

export default function sideNavigationBar() {

    const [open, setOpen] = React.useState(false)
    const router = useRouter();

    function logout(){
        nookies.destroy(null, 'token');
        router.push('/admin/login');
    }

  return (
    <div class="min-h-screen w-fit">

	<aside
		class="w-[100px] flex flex-col items-center bg-white text-gray-700 shadow h-screen sticky top-0">

		<div class="h-16 flex w-full justify-center items-center">
			{/* <a class="w-20 mx-auto" href="/admin/dashboard">
                <img src='../assets/logo.png' alt='logo' className='items-center'/>
			</a> */}
            <img src='./logo.png' alt='logo' className='items-center'/>
		</div>
		<ul className='w-full'>
            <li class={`${router.asPath == "/admin/dashboard" ? "bg-[#f3f3f3]" : "bg-none"} hover:bg-[#f3f3f3]`}>
                <a href='/admin/dashboard' className='group h-16 flex justify-center items-center w-full'>
                    <i class={`fa-regular fa-table-list text-[20px]  group-hover:text-[#088466] ${router.asPath == "/admin/dashboard" ? "text-[#088466]" : "text-[#333333]"}`}></i>
                </a>
            </li>
            <li class={`${open ? "bg-[#f3f3f3]" : "bg-none"} hover:bg-[#f3f3f3]`}>
                <div className={`cursor-pointer flex flex-row justify-center items-center w-full h-16`} onClick={() => setOpen(!open)}>
                    <i class={`fa-regular fa-pen-to-square text-[20px] duration-300 ease-in-out transition group-hover:text-[#088466] ${open ? "text-[#088466]" : "text-[#333333]"}`}></i>
                    <i class={`fa-solid fa-caret-down absolute left-[70px] duration-300 ease-in-out transition ${open? 'rotate-180' : 'rotate-0'} ${open ? "text-[#088466]" : "text-[#333333]"}`}></i>
                </div>
                <div className={`${open ? 'absolute left-0 duration-300 w-[100px]': 'hidden'} `}>
                    <div className="flex flex-col">
                        <a href='/admin/edit/home' className={`flex justify-center items-center h-16 text-[14px] text-center ${router.asPath == "/admin/edit/home" ? "bg-[#f3f3f3]" : "bg-none"} `}>
                            <h1 className={`font-[500] text-[14px] ${router.asPath == '/admin/edit/home' ? 'border-b-[2px] border-[#088466]' : 'border-b-[2px] border-transparent hover:border-[#088466] duration-200 ease-in'}`}>Home</h1>
                        </a>
                        <a href='/admin/edit/aboutus' className={`flex justify-center items-center h-16 text-[14px] text-center ${router.asPath == "/admin/edit/aboutus" ? "bg-[#f3f3f3]" : "bg-none"} `}>
                            <h1 className={`font-[500] text-[14px] ${router.asPath == '/admin/edit/aboutus' ? 'border-b-[2px] border-[#088466]' : 'border-b-[2px] border-transparent hover:border-[#088466] duration-200 ease-in'}`}>About</h1>
                        </a>
                        <a href='/admin/edit/service' className={`flex justify-center items-center h-16 text-[14px] text-center ${router.asPath == "/admin/edit/service" ? "bg-[#f3f3f3]" : "bg-none"} `}>
                            <h1 className={`font-[500] text-[14px] ${router.asPath == '/admin/edit/service' ? 'border-b-[2px] border-[#088466]' : 'border-b-[2px] border-transparent hover:border-[#088466] duration-200 ease-in'}`}>Services</h1>
                        </a>
                        <a href='/admin/edit/work' className={`flex justify-center items-center h-16 text-[14px] text-center ${router.asPath == "/admin/edit/work" ? "bg-[#f3f3f3]" : "bg-none"} `}>
                            <h1 className={`font-[500] text-[14px] ${router.asPath == '/admin/edit/work' ? 'border-b-[2px] border-[#088466]' : 'border-b-[2px] border-transparent hover:border-[#088466] duration-200 ease-in'}`}>Works</h1>
                        </a>
                        <a href='/admin/edit/contactus' className={`flex justify-center items-center h-16 text-[14px] text-center ${router.asPath == "/admin/edit/contactus" ? "bg-[#f3f3f3]" : "bg-none"} `}>
                            <h1 className={`font-[500] text-[14px] ${router.asPath == '/admin/edit/contactus' ? 'border-b-[2px] border-[#088466]' : 'border-b-[2px] border-transparent hover:border-[#088466] duration-200 ease-in'}`}>Contact</h1>
                        </a>
                    </div>
                </div>
            </li>
        </ul>

		<div class="mt-auto h-16 flex items-center w-full">
			<button onClick={logout} class="h-16 mx-auto flex justify-center items-center w-full hover:bg-red-200">
                <i class="fa-regular fa-arrow-right-from-bracket text-[20px] text-red-700"></i>
			</button>
		</div>

	</aside>
</div>
  )
}
