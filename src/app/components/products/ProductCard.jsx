'use client';

export default function ProductCard({ product }) {
    return (
        <div className='bg-white rounded-md shadow-md p-4'>
            <img
                src={product.image}
                alt={product.name}
                className='h-40 w-full object-contain mb-3'
            />

            <h3 className='font-medium'>{product.name}</h3>

            <p className='text-sm opacity-70 mb-2'>
                {product.description}
            </p>

            <p className='font-semibold'>
                ${product.price}
            </p>
        </div>
    );
}
