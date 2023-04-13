import landingpage from "../../layouts/adminlandingpage"
import nookies from 'nookies'
import React, {useRef} from 'react';
import { DownloadTableExcel } from 'react-export-table-to-excel';
import {AiOutlineMenuFold} from 'react-icons/ai'


export async function getServerSideProps(ctx){

  const cookies = nookies.get(ctx)

  const token = cookies.token;

  console.log(token);

  if(!token || token.length < 1){

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


export default function dashboard() {

  const [data, setData] = React.useState([])
  const [open, setOpen] = React.useState(false)
  const tableRef = useRef(null);

  React.useEffect(()=>{
    const getUser = async () => {
        const req = await fetch(`/api/datadrcoding`, {method: "GET"})
          const res = await req.json()
          if(res.status == 200) {
            setData(res.data)
          }
      }
      getUser()
}, [])

  return (
    <div className='h-screen w-[100%] overflow-scroll flex flex-col items-center bg-white'>
        <nav className="p-3 rounded font-dmsans w-full m-2">
            <ol class="flex">
                <li><a href="/admin/dashboard" class="text-[#088466] font-[400]">Admin</a></li>
                <li><span class="mx-2 text-[#088466]">/</span></li>
                <li><a href="/admin/dashboard" class="text-[#088466] font-[400]">Dashboard</a></li>
            </ol>
        </nav>
        

        <div className='w-full max-w-[90%] mx-auto p-10'>
                <div className="max-h-[620px] relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 flex justify-between items-center">
                                <h1 className="text-[16px] md:text-[22px] text-[#383B3E] font-dmsans font-[700]">DATA DRCODING</h1>
                                
                                <div className='hidden sm:flex space-x-2'>
                                    <DownloadTableExcel
                                        filename="DRCODING report"
                                        sheet="users"
                                        currentTableRef={tableRef.current}
                                    >
                                    <button className="py-2 px-8 rounded-full shadow-md custombuttongreen">Export Data</button>
                                    </DownloadTableExcel>

                                    {/* <button onClick={logout} className="py-2 px-8 rounded-full shadow-md bg-[#fe2f2f] text-white font-poppins hover:shadow-lg active:scale-90 transition duration-150">Log out</button> */}
                                </div>

                                <div onClick={() => setOpen(!open)} className="flex sm:hidden">
                                    <button className='hover:scale-105 hover:shadow-sm duration-300 rounded-full'>
                                        {/* <i class="fa-regular fa-user text-3xl text-[#6D6156]"></i> */}
                                        <AiOutlineMenuFold className={`${open? '-rotate-90' : 'rotate-0'} text-[#088466] text-[30px] duration-500`}/>
                                    </button>
                                    <div className={`${open ? 'absolute right-4 top-10 origin-top-right duration-300 rounded-md shadow-lg w-48': 'hidden'} `}>
                                        <div className="px-2 py-2 bg-[#f4f4f4] rounded-md shadow-md drop-shadow-md">
                                            <DownloadTableExcel
                                                filename="IBM report"
                                                sheet="users"
                                                currentTableRef={tableRef.current}
                                            >
                                                <a className="block px-4 py-2 mt-2 text-sm hover:scale-105 hover:shadow-lg duration-300 rounded-lg text-[#383B3E] font-dmsans font-[700]">Export Data</a>
                                            </DownloadTableExcel>
                                            {/* <a className="block px-4 py-2 mt-2 text-sm hover:scale-105 hover:shadow-lg duration-300 rounded-lg text-[#383B3E] font-dmsans font-[700]">Log Out</a> */}
                                        </div>
                                    </div>
                                </div> 

                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto scrollbar">
                        <table ref={tableRef} className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Id
                                    </th>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Name
                                    </th>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Email
                                    </th>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Phone Number
                                    </th>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Project
                                    </th>
                                    <th className= "px-6 align-middle border border-solid py-3 text-[#383B3E] font-dmsans font-[700] text-xs uppercase border-l-0 border-r-0 whitespace-nowrap text-left ">
                                        Message
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => {
                                    return(
                                    <>
                                        <tr>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {index + 1}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {value.name}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {value.email}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {value.phone_number}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                {value.types}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                <textarea disabled className='min-w-[350px] w-full'>{value.message}</textarea>
                                            </td>
                                        </tr>
                                    </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
    </div>
  )
}

dashboard.layout = landingpage