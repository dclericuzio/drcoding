import React from 'react'

export default function banner4() {

    const [open, setOpen] = React.useState(false)

    // const content = [
    //     {idx:'01', title: 'Website', content: 'Layanan pembuatan website untuk berbagai macam kebutuhan bisnis anda.', button: 'Jenis Website', dropdown: ['Website Perusahaan', 'Website Sekolah', 'Landing Page Produk','Website E-Commerce']},
    //     {idx:'02', title: 'Aplikasi Mobile', content: 'Layanan pembuatan aplikasi berbasis mobile untuk berbagai macam kebutuhan bisnis anda.', button: 'Jenis Aplikasi Mobile', dropdown: ['Aplikasi Gudang', 'Aplikasi POS', 'Aplikasi absensi']},
    //     {idx:'03', title: 'Design', content: 'Layanan pembuatan desain untuk website maupun aplikasi berbasis mobile.', button: 'Tools Desain', dropdown: ['Figma','Adobe Photoshop', 'Adobe illustrator', 'Sketch']},
    //     {idx:'04', title: 'IT Konsultan', content: 'DR CODING menyediakan layanan jasa konsultasi terbaik untuk seluruh kebutuhan klien di dalam aspek IT maupun bisnis.', button: 'Jenis Layanan Konsultan', dropdown: ['IT Project Manager','IT Developer','IT Business Analyst']},
    //     {idx:'05', title: 'Jasa Instalasi Jaringan', content: 'Melayani semua jasa networking perusahaan, mulai dari instalasi dan maintenance jaringan lokal atau cloud untuk perkantoran.', button: 'Jenis Layanan Jaringan', dropdown: ['Manajemen Kabel','Maintenance Jaringan Lokal','Perencanaan Jaringan Perkantoran', 'Konfigurasi Server Lokal', 'Konfigurasi dan Testing Jaringan', 'Instalasi Jaringan WAN & MAN & LAN']},
    //     {idx:'06', title: 'All in One IT Service', content: 'Layanan desain sekaligus website atau aplikasi mobile dengan kualitas ux (user experience) yang terjamin.', button: 'Jenis All in One Service', dropdown: ['Design Website','Design Aplikasi Mobile','Realisasi Design', 'Konsultasi']},
    // ]

    const card = [
        {fa:'fa-browser' , title: 'Website Development', content:['Corporate Website','Travel Website','Product Website', 'Landing Page']},
        {fa:'fa-mobile' , title: 'Mobile Application', content:['Corporate Application','Travel Application','Product Application']},
        {fa:'fa-pen' , title: 'UI/UX', content:['Website Design','Application Design','System Design']},
        {fa:'fa-person-chalkboard' , title: 'IT Consultation', content:['System Design','System Flow']},
        {fa:'fa-chart-network' , title: 'Network Installation', content:['Cable Management','Local Network', 'LAN, WAN & MAN Installation']},
        {fa:'fa-globe' , title: 'All in One IT Services', content:['Website Design','APplication Design', 'Consultation', 'Design realization']},
    ]


  return (
    <div className='w-full py-20'>
        <div className='flex flex-col mx-auto max-w-full w-[90%]'>
            <h1 className='mx-auto font-cormorant text-[40px] font-[500] text-[#333333]'>What we do</h1>
            <h1 className='mx-auto text-[#666666] text-[14px]'>Tell us what you need, and we will help you with the best solutions.</h1>
            <h1 className='mx-auto text-[#666666] text-[14px]'>Use your resources to grow your business, worry no more!</h1>
        </div>
        <div className='whitespace-nowrap mt-10 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-4 sm:px-28 gap-10'>
            {card.map((cards, index)=>{
                return(
                    <div key={index} className='flex flex-col items-center'>
                        <div className='w-[70px] h-[70px] text-center'>
                            <i class={`fa-regular ${cards.fa} text-[50px] fa-fw`}></i>
                        </div>
                        <h1 className='font-[600] text-[16px] sm:text-[18px] text-[#333333]'>{cards.title}</h1>
                        <ul className='text-center text-[14px] text-[#666666] list-disc marker:text-[#333]'>
                            {cards.content.map((contents, index)=>{
                                return <li key={index}>{contents}</li>
                            })}
                        </ul>
                    </div>
                )
            })}
            
            {/* {content.map((contents, index) => (
                <div key={index} className='min-h-[400px] bg-white drop-shadow-lg flex-[1_0_300px]'>
                    <div className='h-full p-4 flex flex-col'>
                        <h1 className='text-[80px] text-transparent font-outline-1'>{contents.idx}</h1>
                        <h1 className='font-[700] text-[16px]'>{contents.title}</h1>
                        <div className='border-l-[3px] border-black mt-4'>
                            <div className='pl-4'>
                                <h1 className='font-[400] text-[14px] text-[#7d7d7d]'>{contents.content}</h1>   
                            </div>
                        </div>
                        <div onClick={()=>setOpen(!open)} className='cursor-pointer mt-8 w-full h-10 outline outline-2 outline-offset-1 flex justify-between items-center px-2'>
                            <h1 className='font-[700] text-[16px]'>{contents.button}</h1>
                            <div className="flex group z-50 relative w-6 h-6 cursor-pointer flex-col justify-center items-center" onClick={()=>setOpen(!open)}>
                                <span className='absolute h-[2.5px] w-full rounded-lg group-hover:text-red-500 cursor-pointer bg-black' />
                                <span className={`absolute h-full w-[2.5px] rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-100 ease-out ${ open ? "w-0" : "w-full bg-black"}`} />
                            </div>
                        </div>
                        <ul className={`${ open ? 'block' : 'hidden'} transition-all duration-500 ease-out list-disc p-4 text-[14px] text-[#7d7d7d] font-[400]`}>
                            {contents.dropdown.map((dropdowns,index) => {
                                return <li key={index}>{dropdowns}</li>
                            })}
                        </ul>
                        <div className='mt-auto flex items-center gap-4 cursor-pointer'>
                            <i class="fa-regular fa-plus"></i>
                            <h1 className='font-[700] text-[16px]'>Lihat Detail</h1>
                        </div>
                    </div>
                </div>
            ))} */}
        </div>
    </div>
  )
}
