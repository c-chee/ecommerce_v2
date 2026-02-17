'use client';

export default function TextOverMedia({
    image,
    video,
    poster,
    children,
    className = ''
}) {
    return (
        <section
            className={`relative overflow-hidden w-full min-h-[20em] md:min-h-[30em] flex leading-loose ${className}`}
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
            ) : image ? (
                <img
                    src={image}
                    alt=''
                    className='absolute inset-0 w-full h-full object-cover'
                />
            ) : null}

            {/* Overlay */}
            {(video || image) && (
                <div className='absolute inset-0 bg-black/30' />
            )}

            {/* Content */}
            <div className='relative z-10 flex flex-col justify-center items-start w-full text-left text-white px-6 py-16'>
                {children}
            </div>

        </section>
    );
}
