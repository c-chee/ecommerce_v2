'use client'; // Client component

// Props: quote (string), author (optional string), imgSrc (optional), imgAlt (optional)
export default function QuoteBox({ quote, author, imgSrc, imgAlt }) {
    return (
        <blockquote className='bg-[var(--grey-black)] p-4 rounded-md border-l-4 border-[var(--accent-color)] text-white italic'>
            
            {/* Quote Text */}
            <p className='mb-4'>{quote}</p>

            {/* Author with optional image */}
            {author && (
                <div className='flex items-center space-x-3 mt-2'>
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            alt={imgAlt || 'Author image'}
                            className='w-auto h-10 object-cover'
                        />
                    )}
                    <span className='font-semibold'>— {author}</span>
                </div>
            )}
        </blockquote>
    );
}
