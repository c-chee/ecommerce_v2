'use client';
import { useState, useEffect } from 'react';
import LinkButton from './LinkButton';
import IconButton from './IconButton';
import Link from 'next/link';

export default function Navbar() {
    // --- States ---
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // --- Scroll Effect ---
    // Changes nav as page is scrolled down
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='fixed w-full top-0 z-50 bg-black shadow-[0px_2px_2px_rgb(62,62,62)]'>

            {/* --- Top Bar: Hamburger + Logo (Mobile) --- */}
            <div className='flex items-center justify-between p-4 md:hidden'>
                {/* Hamburger Button */}
                <IconButton onClick={() => setMenuOpen(!menuOpen)} className='text-3xl'>☰</IconButton>

                {/* Logo */}
                <Link href='/'>
                    <img src='/wabisabi_title_white.png' alt='Logo' className='h-18 w-auto' />
                </Link>


            </div>

            {/* --- Full Nav (Desktop) --- */}
            <nav className='hidden md:flex flex-col items-center p-4'>
            
                {/* Logo */}
                <Link
                    href='/'
                    className={`overflow-hidden flex items-center justify-center relative z-10 transition-all duration-700
                    ${scrolled ? 'h-12' : 'h-24'}`}
                    >
                    <img
                        src={scrolled ? '/wabisabi_title_white.png' : '/wabisabi_logo_white.png'}
                        alt='Logo'
                        className={`w-auto transition-all duration-300
                        ${scrolled ? 'h-62 translate-y-2' : 'h-40'}`}
                    />
                </Link>
                

                {/* Nav Links */}
                <div className='hidden md:flex justify-center gap-12 pt-4 uppercase font-medium hover:font-medium hover:decoration-2'>
                    <LinkButton href='/'>Home</LinkButton>
                    <LinkButton href='/about'>About</LinkButton>
                    <LinkButton href='/products'>Products</LinkButton>
                    <LinkButton href='/contact'>Contact</LinkButton>
                </div>
                
            </nav>

            {/* --- Hidden Menu (Mobile Overlay) --- */}
            {menuOpen && (
                <>
                {/* Overlay */}
                <div
                    className='fixed inset-0 bg-black/60 z-40'
                    onClick={() => setMenuOpen(false)}
                />
                
                {/* Side Menu */}
                <nav className='fixed top-0 left-0 w-64 h-full bg-orange-800 z-50 p-8 flex flex-col gap-6'>
                    <IconButton
                        onClick={() => setMenuOpen(false)}
                        className='text-2xl mb-4'
                        >
                        ×
                    </IconButton>

                    <LinkButton href='/' onClick={() => setMenuOpen(false)}>Home</LinkButton>
                    <LinkButton href='/about' onClick={() => setMenuOpen(false)}>About</LinkButton>
                    <LinkButton href='/products' onClick={() => setMenuOpen(false)}>Products</LinkButton>
                    <LinkButton href='/contact' onClick={() => setMenuOpen(false)}>Contact</LinkButton>
                </nav>
                </>
            )}
        </header>
    );
}
