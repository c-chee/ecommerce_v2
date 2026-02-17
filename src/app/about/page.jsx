'use client'; // Indicates that this is a client side component
import { useEffect, useState } from 'react'; // Import react hooks

// Component Imports
import TextOverMedia from '@/app/components/sections/TextOverMedia';
import QuoteBox from '@/app/components/ui/Quote';

// react functional component
// 'export default' allows other parts of your app to import this component
export default function About() {
    return (
        <section className='bg-[var(--grey-black)]'>
            <div className='flex flex-col lg:max-w-7xl mx-auto px-6 lg:py-16 justify-center'>

                {/* About Hero */}
                <section className='pb-10'>
                    <h1 className='text-3xl font-semibold mb-6 place-self-start'>About</h1>

                    <TextOverMedia
                        video='/media/akuna.mp4'
                        className='
                            [mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
                            [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]
                        '
                        // [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] 
                        // [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]

                    >
                        <div className='flex flex-col max-w-3xl space-y-4 mx-auto text-center font-[var(--font-walter)]'>
                            <p style={{ fontFamily: 'var(--font-walter)' }} className='text-[1.5em] md:text-[2.5em]  lg:text-[3.5em]'>Beauty in Imperfection</p>
                        </div>
                    </TextOverMedia>
                    
                    {/* Brand Meaning */}
                    <TextOverMedia>
                        
                        <div>
                            <h2 className='text-[var(--light-orange)] text-xl font-semibold pb-5'>
                                Wabi Sabi (侘寂)
                            </h2>

                            <p>
                                <b>'Beauty in Imperfection'</b> Meaning, there's an aesthetic
                                to something not being perfect.
                            </p>

                            <p>
                                A traditional Japanese aesthetic concept celebrating
                                <b> imperfection</b>, <b>impermanence</b>, and the beauty of
                                <b> natural simplicity</b>.
                            </p>

                            <p>
                                We hope our brand brings people with the same passion for the
                                automotive industry together to learn and grow.
                            </p>

                            <p>
                                Through our products we create a common passion.
                            </p>

                
                        </div>

                    </TextOverMedia>

                    {/* Brand Quotes */}
                    <QuoteBox
                        quote="Appreciate and value your build, no matter the stage it's in. When you display your work, 
                                you're celebrating its uniqueness, its flaws, and the story behind it. Every mark, every imperfection, 
                                tells a part of the journey, making it truly yours."
                        author="WabiSabi Creator"
                        imgSrc="/icon.png"
                    />

                </section>
            </div>
        </section>
        
    );
}