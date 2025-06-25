import React from 'react';
import Foto from '@/app/_assets/logo.png';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
        <div className='container'>
            <div className='flex flex-wrap items-center'>
                <div className='w-full p-4 lg:w-1/2'>
                    <h1 className='text-base font-semibold text-primary md:text-xl lg:text-2xl'>
                        Selamat Datang <span className='block font-bold text-primary text-4xl mt-1'> DI X RPL 4</span>
                    </h1>
                    <h2 className='font-medium text-slate-500 text-lg mb-5 lg:text-2xl'>Kami adalah frontend developer</h2>
                    <p className='mb-10 font-medium text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, natus odio. Sed, ab. Molestias, sequi voluptatem.</p>
                    <Link href='#' className='text-base font-bold text-white bg-primary py-3 px-8 rounded-full hover:opacity-70 transition duration-300 ease-in-out'>Hubungi Kami</Link>
                </div>
                <div className='w-full p-4 lg:w-1/2 flex justify-center'>
                    <Image src={Foto} width={400} height={200} alt='foto' className='max-w-full' />
                
                </div>
            </div>
        </div>
    );
}

export default Hero;
