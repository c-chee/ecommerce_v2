'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/app/components/products/ProductCard';

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const containerRef = useRef();

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                console.log("Products fetched:", data);
                setProducts(data);
            })
            .catch(err => console.error("Fetch error:", err));
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
        <section className='relative w-full'>
            <h2 className='text-3xl font-semibold mb-6'>
                Featured Products
            </h2>

            {/* Left Arrow */}
            <button
                onClick={() => scroll('left')}
                className='absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white px-3 py-2'
            >
                ←
            </button>

            {/* Scroll container */}
            <div
                ref={containerRef}
                className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10'
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
                className='absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black text-white px-3 py-2'
            >
                →
            </button>
        </section>
    );
}
