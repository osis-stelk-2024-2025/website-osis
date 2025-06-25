import React from 'react'
import ravella1 from '@/app/_assets/portofolio/ravella1.jpg'
import ravella2 from '@/app/_assets/portofolio/ravella2.jpg'
import ravella3 from '@/app/_assets/portofolio/ravella3.jpg'
import ravella4 from '@/app/_assets/portofolio/ravella4.jpg'
import Image from 'next/image'
function Portofolio() {
    return (
        <>
            <div className='container'>
                <div className='w-full px-4'>
                    <div className='max-w-xl mx-auto text-center mb-16'>
                        <h4 className='font-semibold text-lg text-primary mb-2'>Galery Ravella's</h4>
                        <h2 className='font-bold text-slate-400 text-3xl mb-4'>ALL ABOUT RAVELLA'S</h2>
                        <p className='font-medium text-md text-black'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quisquam natus qui sed necessitatibus accusamus perferendis odio officia amet, architecto, temporibus est maiores delectus atque officiis, sapiente impedit expedita distinctio!
                        </p>
                    </div>
                </div>
                <div className='w-full px-4 flex flex-wrap justify-center xl'>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={ravella1} alt='ravella1' sizes='100w' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'> FOTO STUDIO</h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, a? Perferendis aliquam eligendi ipsa sed nihil incidunt, eos dolor reiciendis, iusto dicta iste. Exercitationem, maxime maiores totam fugiat autem nulla.
                        </p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={ravella2} alt='ravella1' sizes='100w' className='shadow-md' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'>P5 MOMENT</h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vero molestiae similique inventore incidunt corporis quos repudiandae aliquam quaerat culpa qui natus facilis veritatis at fuga, sint aut, magnam repellat!
                        </p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={ravella3} alt='ravella1' sizes='100w' className='shadow-md' />
                        </div>
                        <h3 className='font-bold text-xl text-primary mt-5 mb-3'>RAVELLA'S GOES TO MALINO</h3>
                        <p className='font-medium text-base text-slate-400'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, a? Perferendis aliquam eligendi ipsa sed nihil incidunt, eos dolor reiciendis, iusto dicta iste. Exercitationem, maxime maiores totam fugiat autem nulla.
                        </p>
                    </div>
                    <div className='mb-12 p-4 md:w-1/2'>
                        <div className='rounded-md overflow-hidden shadow-2xl transition-transform duration-300 transform hover:scale-105'>
                            <Image src={ravella4} alt='ravella1' sizes='100w' className='shadow-md' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portofolio