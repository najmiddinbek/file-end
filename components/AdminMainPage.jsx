import Link from 'next/link';
import { AiOutlineEye } from 'react-icons/ai';
import CountChortoq from "./MFY/CountChortoq"
import BeshKapa from "./MFY/Beshkapa"
import Ziyokor from "./MFY/Ziyokor"
import Bolon from "./MFY/Bolon"
import Sarkor from "./MFY/Sarkor"
import { BsFillEnvelopeFill } from "react-icons/bs"


export default function page() {
    return (
        <div className='admin_main_page_some_padding mt-10 max-w-[1400px] ml-auto mr-auto'>
            <div data-aos="fade-down" className="flex justify-between mb-3 main_panel">
                <h1 className='page_text poppins text-3xl mb-4 font-bold'>Barcha MFY </h1>
                <Link href={"/"} className="green asosiy_button py-3 px-10 button text-white rounded-md">
                    Orqaga
                </Link>
            </div>
            <>
                <Link href={"/Chortoq"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <p className='text-[18px] poppins'>
                            Chortoq MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <CountChortoq />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/BeshKapa"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <p className='text-[18px] poppins'>
                            Beshkapa MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <BeshKapa />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/Navruz"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <p className='text-[18px] poppins'>
                            Navruz MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <BeshKapa />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/Ziyokor"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <p className='text-[18px] poppins'>
                            Ziyokor MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Ziyokor />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/Bolon"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full mb-3'>
                        <p className='text-[18px] poppins'>
                            Bo`lon MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Bolon />
                            </div>
                        </div>
                    </div>
                </Link>
                <Link href={"/Sarkor"}>
                    <div data-aos="fade-up" className='max-w-[1400px] mx-auto w-full shadow-md p-3 bg-white rounded-md flex justify-between items-center h-full'>
                        <p className='text-[18px] poppins'>
                            Sarkor MFY
                        </p>
                        <div className="flex gap-2">
                            <div className='w-12 h-12 bg-[#f8f8f8] rounded-md flex items-center justify-center'>
                                <AiOutlineEye className='text-3xl' />
                            </div>
                            <div className='w-12 h-12 relative bg-[#f8f8f8] flex items-center justify-center rounded-md'>
                                <BsFillEnvelopeFill className='text-3xl' />
                                <Sarkor />
                            </div>
                        </div>
                    </div>
                </Link>
            </>
        </div>
    );
}