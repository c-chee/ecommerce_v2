'use client';
import Link from 'next/link';

/**
 * href - where the link goes
 * onClick - optional, for closing the mobile menu
 * children - the text of the link
 * className - extra Tailwind classes 
 */
export default function LinkButton({
    href,
    children,
    onClick,
    className,
    }) {
    return (
        <Link
        href={href}
        onClick={onClick}
        className={`relative inline-block
            text-[var(--light-orange)]
            hover:text-[var(--orange)]
            tracking-wider
            transition-colors duration-300
            after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
            after:h-[2px] after:w-0 after:bg-[var(--orange)]
            after:transition-all after:duration-300
            hover:after:w-full
            ${className ?? ""}`}
        >
            {children}
        </Link>
    );
}
