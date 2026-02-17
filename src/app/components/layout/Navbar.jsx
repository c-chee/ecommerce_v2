'use client';
import { useState, useEffect } from 'react';
import LinkButton from '@/app/components/ui/LinkButton';
import IconButton from '@/app/components/ui/IconButton';
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
        <header className='fixed w-full top-0 z-50 bg-black'>
            {/* shadow-[0px_2px_2px_rgb(62,62,62)] */}

            {/* --- Top Bar: Hamburger + Logo (Mobile) --- */}
            <div className='flex items-center justify-between p-4 md:hidden h-20 '>
                {/* Hamburger Button */}
                <IconButton onClick={() => setMenuOpen(!menuOpen)} className='text-3xl'>☰</IconButton>

                {/* Logo */}
                <Link href='/' className='md:flex flex-col justify-start w-auto'>
                    <img src='/wabisabi_title_crop.png' alt='WABI SABI jp' className='w-[175px] h-auto' />
                </Link>

                {/* Shop placeholder */}
                <div></div>

            </div>

            {/* --- Full Nav (Desktop) --- */}
            <nav className='hidden md:flex flex-col items-center p-4'>
            
                {/* Logo */}
                <Link
                href='/'
                className={`flex items-center justify-center relative z-10
                transition-all duration-700 ${scrolled ? 'h-14' : 'h-24'}`}
                >
                    <div className='relative'>
                        {/* Full Logo */}
                        <img
                            src='/wabisabi_logo_white.png'
                            alt='WABI SABI jp'
                            className={`w-[6.5em] h-auto transition-all duration-700
                            ${scrolled ? 'opacity-0 scale-*' : 'opacity-100 scale-100'}`}
                        />

                        {/* Title */}
                        <img
                            src='/wabisabi_title_crop.png'
                            alt='WABI SABI jp'
                            className={`w-[14em] h-auto absolute inset-0 m-auto transition-all duration-700
                            ${scrolled ? 'opacity-100 scale-150' : 'opacity-0 scale-90'}`}
                        />
                    </div>

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
            {/* --- Hidden Menu (Mobile Overlay) --- */}

            {/* Overlay */}
            <div
            className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
            ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
            onClick={() => setMenuOpen(false)}
            />

            {/* Side Menu */}
            <nav
            className={`fixed top-0 left-0 w-64 h-full bg-[var(--dark-orange)] z-50 p-8 flex flex-col gap-6
            transform transition-transform duration-400 ease-out
            ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <IconButton onClick={() => setMenuOpen(false)} className="text-4xl ml-auto">×</IconButton>

                <LinkButton href="/" onClick={() => setMenuOpen(false)} className='text-white uppercase font-medium'>Home</LinkButton>
                <LinkButton href="/about" onClick={() => setMenuOpen(false)} className='text-white uppercase font-medium'>About</LinkButton>
                <LinkButton href="/products" onClick={() => setMenuOpen(false)} className='text-white uppercase font-medium'>Products</LinkButton>
                <LinkButton href="/contact" onClick={() => setMenuOpen(false)} className='text-white uppercase font-medium'>Contact</LinkButton>
            </nav>

        </header>
    );
}
