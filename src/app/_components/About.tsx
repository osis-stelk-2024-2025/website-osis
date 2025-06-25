import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
function About() {
    return (
        <>
            <div className='container'>
                <div className='flex flex-wrap'>
                    <div className='w-full px-4 mb-10 lg:w-1/2'>
                        <h4 className='font-bold uppercase text-primary text-lg mb-3'>Tentang Kami</h4>
                        <h2 className='font-bold text-slate-400 text-3xl max-w-md lg:text-4xl'>RavellaForever</h2>
                        <p className='font-medium text-base text-black max-w-xl lg:text-lg'></p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, impedit suscipit voluptas magni eum repellendus, vitae, amet optio consequatur voluptates culpa repudiandae expedita beatae quibusdam rerum temporibus hic harum sunt.
                    </div>
                    <div className='w-full px-4 lg:w-1/2'>
                        <h3 className='font-semibold text-slate-400 text-2xl mb-2 lg:mt-10'>RavellaBau</h3>
                        <p className='font-medium text-base text-black max-w-xl lg:text-lg'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, amet officiis laboriosam, perspiciatis sed non numquam fugiat consectetur, corporis similique ea quidem cum magni illo nostrum et accusamus deleniti eaque.
                        </p>
                        <div className='flex items-center'>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                            <FaTiktok/>
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                            <FaFacebook/>
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                            <FaInstagram/>
                            </Link>
                            <Link href='#' className='w-9 h-9 mr-3 rounded-full flex justify-center items-center border-slate-300 hover:border-primary hover:text-primary'>
                            <FaLinkedin/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About