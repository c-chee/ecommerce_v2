'use client'
import { useEffect, useState } from 'react';
import BoxButton from '@/app/components/ui/BoxButton';

export default function Hero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className='sticky w-full min-h-[35em] overflow-visible'>

            {/* Background split */}
            <div className='absolute inset-0 z-0'>
                <div className='h-12/16 bg-black' />
                <div className='h-4/16 bg-[var(--grey-black)]' />
            </div>

            {/* Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 flex items-start h-full'>


                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 w-full items-center'>

                    {/* Left column */}
                    <div className='text-white md:pr-10 text-center md:text-left pt-16 md:pt-0'>

                        <h1 className='text-[var(--light-orange)] text-3xl sm:text-4xl md:text-6xl font-light mb-6'>
                            Shop the New Collection
                        </h1>

                        <p className='mb-8 text-base sm:text-lg opacity-80 max-w-md mx-auto md:mx-0'>
                            Make your car yours. Premium stickers built to stand out.
                        </p>

                        <div className='flex justify-center md:justify-start'>
                            <BoxButton href='/products'>Shop Now</BoxButton>
                        </div>

                    </div>

                    {/* Car column */}
                    <div
                        className='flex justify-center md:justify-end relative z-30 -translate-x-6 sm:-translate-x-2 md:translate-x-0'
                        style={{
                            transform: `
                                translateX(${offset * 0.35}px)
                                translateY(${offset * 0.18}px)
                                rotate(${offset * 0.01}deg)
                            `,
                        }}
                    >
                        <img
                            src='/86_transparent.png'
                            alt='86-car'
                            className='
                                max-h-[45vh]
                                sm:max-h-[50vh]
                                md:max-h-[70vh]
                                object-contain
                                translate-y-6 md:translate-y-0
                            '
                        />
                    </div>


                </div>

            </div>
        </section>
    );
}
