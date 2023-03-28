import landingpage from "../../../layouts/adminlandingpage"
import nookies from 'nookies'
import React from 'react'


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

export default function home() {

  const[field, setField] = React.useState({});

    function setValue(e){
      const target = e.target;
      const name = target.name;
      const value = target.value;
  
      setField({
        ...field,
        [name]:value
      })
    }
  return (
    <div className='max-w-[1600px] w-full min-h-min mx-auto p-3 m-2'>
      <nav className="rounded font-dmsans w-full">
            <ol class="flex">
                <li><a href="/admin/dashboard" class="text-[#088466] font-[400]">Admin</a></li>
                <li><span class="mx-2 text-[#088466]">/</span></li>
                <li><a href="/admin/edit/home" class="text-[#088466] font-[400]">Edit</a></li>
                <li><span class="mx-2 text-[#088466]">/</span></li>
                <li><a href="/admin/edit/home" class="text-[#088466] font-[400]">Home</a></li>
            </ol>
        </nav>

        <div className='mt-8 flex flex-col'>
            <div className='w-full h-fit'>
              <div className="border-2 border-[#088466] w-full min-h-fit rounded-[10px] p-2">
                <h1 className='font-cormorant text-[40px] font-[500] text-[#333333]'>Banner 1</h1>
                <h1 className='font-cormorant text-[20px] font-[500] text-[#333333]'>Title</h1>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <div className="md:w-1/2 flex flex-col md:flex-row">
                    <h1 className='w-[50px] font-cormorant text-[16px] font-[500] text-[#333333]'>In used:</h1>
                    <h1 className='font-cormorant text-[16px] font-[500] text-[#333333]'>Empowering your Business Potential with Digital Solutions</h1>
                  </div>
                  <div className="md:w-1/2 flex flex-col md:flex-row">
                    <h1 className='w-[50px] font-cormorant text-[16px] font-[500] text-[#333333]'>Edit:</h1>
                    <h1 className='font-cormorant text-[16px] font-[500] text-[#333333]'>Empowering your Business Potential with Digital Solutions</h1>
                  </div>
                </div>
                {/* <div className="flex flex-row space-x-4">
                  <h1 className='w-[50px] font-cormorant text-[16px] font-[500] text-[#333333]'>Edit:</h1>
                  <h1 className='font-cormorant text-[16px] font-[500] text-[#333333]'>Empowering your Business Potential with Digital Solutions</h1>
                </div> */}
              </div>
            </div>
        </div>
    </div>
  )
}

home.layout = landingpage
