'use client'; // Client-side component

// Component Imports
import Link from 'next/link';
import BoxButton from '@/app/components/ui/BoxButton';

// Takes in props, specified when used
// - title: string, the name of the category
// - image: optional string, URL of the background image
// - href: string, the URL to navigate to when clicked
export default function LinkTile({ title, image, href }) {
    // --- Ensure href always has a value ---
    const linkHref = href || '/products'; // fallback to /products if not provided

    return (
        // Link attached to the tile
        // Clicking navigates to the correct products page/category
        <Link
            href={linkHref}
            className='group relative overflow-hidden rounded-xl block'
        >
            {/* Background Image */}
            {image && (
                <img
                    src={image}
                    alt={title}
                    className='
                        w-full h-64 sm:h-72 md:h-80 object-cover
                        transition duration-500
                        group-hover:scale-110
                    '
                />
            )}

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

                <BoxButton>
                    Shop Now
                </BoxButton>
            </div>
        </Link>
    );
}
