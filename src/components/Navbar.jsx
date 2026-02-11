'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className='fixed w-full top-0 z-50 bg-black'>

            {/* --- Top Bar: Hamburger + Logo --- */}
            <div className='flex items-center justify-between p-4 md:hidden'>
                {/* Hamburger button (mobile only) */}
                <button
                    className='text-white text-3xl' onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                {/* Logo */}
                <Link href='/'>
                    <img src='wabisabi_logo_white.png' alt='Logo' className='h-12 w-auto' />
                </Link>
            </div>

            {/* --- Full Nav (desktop only) --- */}
            <nav className='hidden md:flex justify-center gap-8 p-4'>

                {/* <Link href='/'>
                <img src='wabisabi_logo_white.png' alt='Logo' className='h-12 w-auto' />
                </Link> */}
                
                <Link href='/' className='text-white hover:text-orange-500'>Home</Link>

                <Link href='/about' className='text-white hover:text-orange-500'>About</Link>

                <Link href='/products' className='text-white hover:text-orange-500'>Products</Link>

                <Link href='/contact' className='text-white hover:text-orange-500'>Contact</Link>
            </nav>

            {/* --- Hidden Menu (mobile overlay) --- */}
            {menuOpen && (
                <>
                <div
                    className='fixed inset-0 bg-black/60 z-40'
                    onClick={() => setMenuOpen(false)}
                />
                <nav className='fixed top-0 left-0 w-64 h-full bg-orange-800 z-50 p-8 flex flex-col gap-6'>
                    <button
                        className='text-white text-2xl mb-4'
                        onClick={() => setMenuOpen(false)}
                        >
                        ×
                    </button>
                    
                    <Link href='/' onClick={() => setMenuOpen(false)}>Home</Link>

                    <Link href='/about' onClick={() => setMenuOpen(false)}>About</Link>

                    <Link href='/products' onClick={() => setMenuOpen(false)}>Products</Link>

                    <Link href='/contact' onClick={() => setMenuOpen(false)}>Contact</Link>
                </nav>
                </>
            )}
        </header>
    );
}
