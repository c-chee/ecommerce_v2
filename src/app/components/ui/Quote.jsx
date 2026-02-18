'use client'; // Client component

// Props: quote (string), author (optional string), imgSrc (optional), imgAlt (optional)
export default function QuoteBox({ 
    quote, 
    author, 
    imgSrc, 
    imgAlt,
    className = '' 
}) {
    return (
        <blockquote className={`bg-[var(--light-blue)] p-4 rounded-md border-l-4 border-white text-[var(--grey-black)] italic md:max-w-[700px] ${className}`}>
            
            {/* Quote Text */}
            <p className='mb-4'>{quote}</p>

            {/* Author with optional image */}
            {author && (
                <div className='flex items-center justify-end space-x-3 mt-2'>
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
