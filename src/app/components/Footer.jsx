'use client';
import { useState, useEffect } from 'react';
import LinkButton from './LinkButton';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='grid grid-cols-1 md:grid-cols-3 gap-4 p-6 max-w-[1500px] h-auto justify-center content-start bg-[var(--grey-black)] text-white text-center md:text-left'>
            
            {/* Left --- Logo*/}
            <Link href='/' className='md:flex flex-col justify-start place-items-center'>
                <img src='/wabisabi_logo_white.png' alt='WABI SABI jp' className='md:flex w-52'/>
            </Link>

            {/* Middle --- Nav Links */}
            <div className='flex flex-col justify-start place-items-center gap-2 pt-4 font-normal'>

                <h2 className='uppercase font-semibold tracking-wider'>- Pages -</h2>

                <LinkButton href='/' className='text-white hover:text-white'>Home</LinkButton>
                <LinkButton href='/about' className='text-white hover:text-white'>About</LinkButton>
                <LinkButton href='/products' className='text-white hover:text-white'>Products</LinkButton>
                <LinkButton href='/contact' className='text-white hover:text-white'>Contact</LinkButton>

            </div>

            {/* Right --- Socials */}
            <div className='flex flex-col justify-start place-items-center gap-2 pt-4 font-normal'>

                <h2 className='uppercase font-medium tracking-wider'>- Socials -</h2>

                <Link href='https://www.instagram.com/' target='_blank' className='inline-block object-contain transition-all duration-300 transform hover:scale-110'>
                    <img src='/Instagram.png' alt='Instagram' className='flex h-12 w-auto' />
                </Link>

            </div>

            {/* Bottom row spanning all 3 columns */}
            <p className='copyright-message col-span-1 md:col-span-3 text-center'>
                &copy; WabiSabi.jp
            </p>
        </footer>

    );
}