/**
 * LinkTile Component
 * Displays a clickable category/product tile with an optional image
 */
'use client';

// Component Imports
import Link from 'next/link';
import BoxButton from '@/app/components/ui/BoxButton';

// Takes in props: title, image, slug (optional), or href (preferred)
export default function LinkTile({ title, image, slug, href }) {
    // --- Determine the link ---
    // Use href if provided, otherwise fallback to slug
    const linkHref = href || (slug ? `/products?category=${slug}` : '/');

    return (
        // Link attached to the tile
        <Link
            href={linkHref} 
            className='group relative overflow-hidden rounded-xl block'
        >
            {/* Background Image */}
            <img
                src={image}
                alt={title}
                className='
                    w-full h-64 sm:h-72 md:h-80 object-cover
                    transition duration-500
                    group-hover:scale-110
                '
            />

            {/* Overlay */}
            <div
                className='
                    absolute inset-0 bg-[var(--grey-black)]/50
                    group-hover:bg-black/55
                    transition duration-300
                '
            />

            {/* Content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4'>
                <h3 className='text-xl font-semibold mb-4'>
                    {title}
                </h3>

                {/* Fake button styled like BoxButton */}
                <BoxButton asChild>
                    <span>Shop Now</span>
                </BoxButton>
            </div>
        </Link>
    );
}
