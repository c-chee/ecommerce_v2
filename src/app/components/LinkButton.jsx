'use client';
import Link from 'next/link';

/**
 * href - where the link goes
 * onClick - optional, for closing the mobile menu
 * children - the text of the link
 * className - extra Tailwind classes 
 */
export default function LinkButton({ href, children, onClick, className }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`text-[var(--light-orange)] hover:text-[var(--orange)] hover:underline underline-offset-8 tracking-wider ${className ?? ''}`}
            >
            {children}
        </Link>
    );
}
