import React from 'react'

export default function banner4() {

    const [open, setOpen] = React.useState(false)

    const content = [
        {idx:'01', title: 'Website', content: 'Layanan pembuatan website untuk berbagai macam kebutuhan bisnis anda.', button: 'Jenis Website', dropdown: ['Website Perusahaan', 'Website Sekolah', 'Landing Page Produk','Website E-Commerce']},
        {idx:'02', title: 'Aplikasi Mobile', content: 'Layanan pembuatan aplikasi berbasis mobile untuk berbagai macam kebutuhan bisnis anda.', button: 'Jenis Aplikasi Mobile', dropdown: ['Aplikasi Gudang', 'Aplikasi POS', 'Aplikasi absensi']},
        {idx:'03', title: 'Design', content: 'Layanan pembuatan desain untuk website maupun aplikasi berbasis mobile.', button: 'Tools Desain', dropdown: ['Figma','Adobe Photoshop', 'Adobe illustrator', 'Sketch']},
        {idx:'04', title: 'IT Konsultan', content: 'DR CODING menyediakan layanan jasa konsultasi terbaik untuk seluruh kebutuhan klien di dalam aspek IT maupun bisnis.', button: 'Jenis Layanan Konsultan', dropdown: ['IT Project Manager','IT Developer','IT Business Analyst']},
        {idx:'05', title: 'Jasa Instalasi Jaringan', content: 'Melayani semua jasa networking perusahaan, mulai dari instalasi dan maintenance jaringan lokal atau cloud untuk perkantoran.', button: 'Jenis Layanan Jaringan', dropdown: ['Manajemen Kabel','Maintenance Jaringan Lokal','Perencanaan Jaringan Perkantoran', 'Konfigurasi Server Lokal', 'Konfigurasi dan Testing Jaringan', 'Instalasi Jaringan WAN & MAN & LAN']},
        {idx:'06', title: 'All in One IT Service', content: 'Layanan desain sekaligus website atau aplikasi mobile dengan kualitas ux (user experience) yang terjamin.', button: 'Jenis All in One Service', dropdown: ['Design Website','Design Aplikasi Mobile','Realisasi Design', 'Konsultasi']},
    ]

    console.log(open);

  return (
    <div className='w-full font-dmsans pb-32 lg:pb-44'>
        <div className='max-w-7xl flex flex-col mx-auto'>
            <h1 className='mx-auto text-[25px] sm:text-[30px] md:text-[35px] font-[500] text-black'>Layanan <span className='mx-2 outline outline-2 outline-offset-4'> <span className='bg-black text-white px-5'>DR</span> <span className='mr-2'>CODING</span></span></h1>
            <h1 className='pt-10 mx-auto px-4 text-center font-[400] text-[14px] md:text-[16px] text-[#7d7d7d]'>Memberikan layanan terbaik dengan menyesuaikan 100% kebutuhan klien dalam menggunakan layanan kami. DR CODING memiliki beberapa macam layan yaitu:</h1>
        </div>
        <div className='max-w-7xl flex flex-wrap gap-6 mx-auto py-5 px-14 md:px-4 mt-10'>
            {content.map((contents, index) => (
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
            ))}
        </div>
    </div>
  )
}
