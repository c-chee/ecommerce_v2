'use client';
import LinkButton from './LinkButton';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-[var(--grey-black)] text-white">
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6
                max-w-[1300px] mx-auto text-center md:text-left"
            >
                {/* Logo */}
                <Link
                href="/"
                className="flex flex-col justify-start items-center"
                >
                    <img
                        src="/wabisabi_logo_white.png"
                        alt="WABI SABI jp"
                        className="w-52 object-cover"
                    />
                </Link>

                {/* Pages */}
                <div className="flex flex-col justify-start items-center gap-2 p-4">
                    <h2 className="uppercase font-semibold tracking-wider">
                        - Pages -
                    </h2>

                    <LinkButton href="/" className="text-white hover:text-white">Home</LinkButton>
                    <LinkButton href="/about" className="text-white hover:text-white">About</LinkButton>
                    <LinkButton href="/products" className="text-white hover:text-white">Products</LinkButton>
                    <LinkButton href="/contact" className="text-white hover:text-white">Contact</LinkButton>
                </div>

                {/* Socials */}
                <div className="flex flex-col justify-start items-center gap-2 pt-4">
                    <h2 className="uppercase font-medium tracking-wider">
                        - Socials -
                    </h2>

                    <Link
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="inline-block transition-all duration-300 hover:scale-110"
                    >
                        <img
                        src="/Instagram.png"
                        alt="Instagram"
                        className="h-12 w-auto"
                        />
                    </Link>
                </div>

                {/* Bottom row */}
                <p className="col-span-1 md:col-span-3 text-center pt-4">
                    &copy; WabiSabi.jp
                </p>
            </div>
        </footer>
    );
}
