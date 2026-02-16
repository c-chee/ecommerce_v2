'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/app/components/products/ProductCard';

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 8)))
            .catch(err => console.error('Fetch error:', err));
    }, []);

    const scroll = (direction) => {
        const container = containerRef.current;
        if (!container) return;
        const scrollAmount = container.offsetWidth * 0.8;

        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section className='relative w-full flex flex-col items-center ' >
            <h2 className='text-3xl font-semibold mb-6'>- Featured Products -</h2>

            <div className='relative flex items-center'>
                {/* Left Arrow */}
                <button
                    onClick={() => scroll('left')}
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 shadow-md cursor-pointer hover:bg-white/30 transition z-20 mr-2'
                >
                    ←
                </button>

                {/* Scroll container */}
                <div
                    ref={containerRef}
                    className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar flex-1 py-4'
                >
                    {products.map((p) => (
                        <div
                            key={p.id}
                            className='min-w-full sm:min-w-[50%] md:min-w-[33.33%] xl:min-w-[25%]'
                        >
                            <ProductCard product={p} />
                        </div>
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className='w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 shadow-md cursor-pointer hover:bg-white/30 transition z-20 ml-2'
                >
                    →
                </button>
            </div>
        </section>
    );
}
