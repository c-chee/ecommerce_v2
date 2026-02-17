'use client';

import Link from 'next/link';

export default function BoxButton({
    children,
    onClick,
    href,
    className = '',
    type = 'button',
    }) {

    const styles = `
        relative overflow-hidden
        px-8 py-[5px]
        border border-white
        text-white
        rounded-md
        font-medium
        group
        transition-colors duration-300
        hover:border-[var(--orange)]
        cursor-pointer
        ${className}
    `;

    const content = (
        <>
            {/* Sliding background */}
            <span
                className='
                absolute inset-0
                bg-[var(--orange)]
                scale-x-0
                group-hover:scale-x-100
                origin-left
                transition-transform duration-500 ease-in-out
                hover:border-[var(--orange)]
                '
            />

            {/* Button text */}
            <span className='relative z-10 group-hover:text-black'>
                {children}
            </span>
        </>
    );

    // Navigation button
    if (href) {
        return (
            <Link href={href} className={styles}>
                {content}
            </Link>
        );
    }

    // Normal button
    return (
        <button type={type} onClick={onClick} className={styles}>
            {content}
        </button>
    );
}
