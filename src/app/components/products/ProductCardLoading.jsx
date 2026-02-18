'use client';

export default function ProductCardLoading() {
    return (
        <div className='relative overflow-hidden bg-[var(--light-blue)]/10 border border-[var(--light-orange)]/20 rounded-xl shadow-lg p-6 h-[24rem] flex flex-col'>

            {/* shimmer layer */}
            <div className='absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent' />

            <div className='h-40 w-full bg-white/10 rounded mb-3' />

            <div className='h-4 w-3/4 bg-white/10 rounded mb-2' />
            <div className='h-3 w-full bg-white/10 rounded mb-1' />
            <div className='h-3 w-5/6 bg-white/10 rounded mb-3' />

            <div className='h-4 w-1/4 bg-white/10 rounded mt-auto' />
        </div>
    );
}
