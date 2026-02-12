'use client';
import { useState, useEffect } from 'react';
import LinkButton from './LinkButton';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='grid grid-cols-3 gap-6 p-6 justify-center content-start text-white'>
            
            {/* Left --- Logo*/}
            <Link href='/' className='md:flex flex-col justify-start'>
                <img src='/wabisabi_logo_white.png' alt='WABI SABI jpS' className='flex w-auto' />
            </Link>

            {/* Middle --- Nav Links*/}
            <div className='hidden md:flex flex-col justify-start place-items-center gap-2 pt-4  font-normal hover:font-normal hover:decoration-2'>
                <h2 className='uppercase font-semibold tracking-wider'>- Pages -</h2>

                <LinkButton href='/' className='text-white hover:text-white'>Home</LinkButton>
                <LinkButton href='/about' className='text-white hover:text-white'>About</LinkButton>
                <LinkButton href='/products' className='text-white hover:text-white'>Products</LinkButton>
                <LinkButton href='/contact' className='text-white hover:text-white'>Contact</LinkButton>
            </div>

            {/* Right */}
            <div className='hidden md:flex flex-col justify-start place-items-center gap-2 pt-4  font-normal hover:font-normal hover:decoration-2'>
                <h2 className='uppercase font-medium tracking-wider'>- Socials -</h2>

                <Link href='https://www.instagram.com/' target='_blank'>
                    <img src='/Instagram.png' alt='Instagram' className='flex h-12 w-auto' />
                </Link>
            </div>

            {/* Bottom row spanning all 3 columns */}
            <p className='copyright-message col-span-3 text-center mt-4'>
                &copy; WabiSabi.jp
            </p>
        </footer>

    );
}