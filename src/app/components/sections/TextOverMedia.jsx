'use client';

export default function TextOverMedia({
    // Props
    image,
    video,
    poster,
    children,
    className=''
}) {
    return (
        <section
            className={`overflow-hidden sticky w-full min-h-[35em] ${className}`}
        >
            {/* Background Media */}
            {video ? (
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={poster}
                    className='absolute inset-0 w-full h-full object-cover'
                >
                    <source src={video} type='video/mp4' />
                </video>
            ) : (
                <img
                    src={image}
                    alt=''
                    className='absolute inset-0 w-full h-full object-cover'
                />
            )}

            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/30`}
            />

            {/* Content */}
            <div className='relative z-10 flex flex-col items-center justify-center text-start text-white px-2 py-16 h-full'>
                {children}
            </div>
        </section>
    );
}
