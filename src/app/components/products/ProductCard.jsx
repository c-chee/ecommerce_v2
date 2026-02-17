'use client';

export default function ProductCard({ product }) {
    return (
        <div className='bg-[var(--light-blue)]/20 border border-white/40 rounded-2xl shadow-lg p-6 h-[24rem] flex flex-col transition-transform hover:scale-[1.02] cursor-pointer'>
            {/* backdrop-blur-sm */}

            <img
                src={product.image}
                alt={product.name}
                className='h-40 w-full object-contain mb-3 flex-shrink-0'
            />

            <h3 className='font-medium mb-1'>{product.name}</h3>

            <p className='text-sm opacity-70 mb-3 flex-grow overflow-hidden'>
                {product.description}
            </p>

            <p className='font-semibold mt-auto'>${product.price}</p>
        </div>
    );
}
