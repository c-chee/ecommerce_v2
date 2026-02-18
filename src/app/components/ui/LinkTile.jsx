// Component Imports
import Link from 'next/link';
import BoxButton from '@/app/components/ui/BoxButton';

// Takes in props, specified when used
export default function LinkTile({ title, image, href }) {
    return (
        // Link attched to the tile
        // slug comes from the categories filter onthe products page
        <Link
            href={href}
            className='group relative overflow-hidden rounded-xl block '
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

                <BoxButton>
                    Shop Now
                </BoxButton>

            </div>
        </Link>
    );
}
