'use client';

import Link from 'next/link';

export default function BoxButton({
    children,
    onClick,
    href,
    className = '',
    type = 'button',
    disabled = false,
    asChild = false,
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
        disabled:opacity-50 disabled:cursor-not-allowed
        tracking-wider
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
                '
            />

            {/* Button text */}
            <span className='relative z-10 group-hover:text-black'>
                {children}
            </span>
        </>
    );


    // Used inside another Link
    if (asChild) {
        return <span className={styles}>{content}</span>;
    }

    // Navigation button
    if (typeof href === "string" && href && !disabled) {
        return (
            <Link href={href} className={styles}>
                {content}
            </Link>
        );
    }

    // Normal button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles}
        >
            {content}
        </button>
    );
}
