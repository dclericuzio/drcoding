import React from 'react'
import { useRouter } from 'next/router';
import nookies from 'nookies'
import { RiErrorWarningLine } from 'react-icons/ri';


export async function getServerSideProps(ctx){

    const cookies = nookies.get(ctx)
  
    const token = cookies.token;
  
    if(token){
  
      return{
          redirect:{
              destination: '/admin/dashboard'
          }
      }
    }
    
  
      return{
          props:{}
      }
}

export default function login() {

    const[field, setField] = React.useState({});
    const[success, setSuccess] = React.useState(false);
    const[bgcolor, setBgcolor] = React.useState("");
    const[notiftext, setNotiftext] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(true)
    const router = useRouter();

    function setValue(e){
        const target = e.target;
        const name = target.name;
        const value = target.value;
    
        setField({
          ...field,
          [name]:value
        })
    }

    async function doLogin(e){
        e.preventDefault();
        
        const req = await fetch('/api/user', {method: 'POST', body: JSON.stringify(field) });
        const res = await req.json();
        
    
        if(res.status === 200){
            nookies.set(null, 'token', res.data)
            setIsLoading(false)
            setSuccess(true);
            setBgcolor("bg-green-500")
            setNotiftext(res.message)
            setTimeout(() => {
                router.push('/admindashboard');
            }, 2000)
        }else{
          setSuccess(true);
          setBgcolor("bg-red-500")
          setNotiftext(res.message)
        }
    
    
    }
   
  return (
    <div className='w-full min-h-min'>
        <div className='max-w-[1600px] h-screen w-full flex mx-auto'>
            <div className='w-full h-fit px-4 md:px-16 lg:px-28 m-auto'>
                <div className='w-full'>
                    <div className='justify-center items-center flex flex-col md:flex-row md:space-x-8'>
                        <div className='w-full md:w-[50%] flex flex-col'>
                            <h1 className='w-[80%] md:w-[90%] mx-auto md:mx-0 text-center md:text-start text-[#333333] text-[40px] xs:text-[45px] sm:text-[60px] md:text-[72px] font-cormorant md:leading-[80px]'>one platform, infinite possibilities</h1>
                            <h1 className='text-[#666666] text-center md:text-start text-[14px] mt-4 md:mt-8 md:leading-[25px] font-dmsans'>build more than a website, and create it your way.</h1>
                        </div>
                        <div className='pt-8 md:pt-0 px-4 md:px-0 w-full md:w-[50%]'>
                            {success?
                                <div className={`${bgcolor} flex flex-row items-center gap-2 justify-center  text-[#ffffff] mb-2 px-3 py-2 rounded-lg text-center`}>
                                    <RiErrorWarningLine/>
                                    <span className='text-[12px]'>{notiftext}</span>
                                </div>
                                :
                                null
                            }
                            {!isLoading ?
                                <>
                                    <div class="relative">
                                        <div class="absolute m-auto top-24 left-0 right-0 w-12 h-12 rounded-full animate-spin border-8 border-solid border-[#17A683] border-t-transparent "></div>
                                    </div>
                                </> 
                                :
                                null
                            }
                            <form onSubmit={doLogin} className={`${!isLoading ? "opacity-50": null} flex flex-col space-y-10`}>
                                <label className= "relative w-full">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Username:</h1>
                                    <input required type="text" className="w-full rounded-[5px] p-2 bg-[#F2F2F2] focus:border-[#088466]" name="identifier" onChange={setValue}/>
                                </label>
                                <label className= "relative w-full">
                                    <h1 className='text-[#666666] text-start text-[14px] font-dmsans'>Password:</h1>
                                    <input required type="password" className="w-full rounded-[5px] p-2 bg-[#F2F2F2] focus:border-[#088466]" name="password" onChange={setValue}/>
                                </label>
        
                                <button type='submit' className='text-white custombuttongreen cursor-pointer px-7 py-3 bg-[#088466] rounded-full font-dmsans mt-10 w-[30%]'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
