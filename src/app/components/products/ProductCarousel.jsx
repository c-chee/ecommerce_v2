'use client';

import { useEffect, useRef, useState } from 'react';
import ProductCard from '@/app/components/products/ProductCard';
import ProductCardLoading from '@/app/components/products/ProductCardLoading';

export default function ProductCarousel() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const containerRef = useRef();

    useEffect(() => {
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.slice(0, 8));
                setLoading(false);
            })
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
        <section className='relative w-full'>
            <h2 className='text-2xl sm:text-3xl font-semibold mb-6 text-center'>
                - Featured Products -
            </h2>

            <div className='relative flex items-center'>

                {/* Left Arrow (hidden on mobile) */}
                <button
                    onClick={() => scroll('left')}
                    className='hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 shadow-md cursor-pointer hover:bg-white/30 transition z-20 mr-3'
                >
                    ←
                </button>

                {/* Scroll container */}
                <div
                    ref={containerRef}
                    className='flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar flex-1 py-4 px-2 sm:px-0'
                >
                    {loading
                        ? Array.from({ length: 6 }).map((_, i) => (
                            <div
                                key={i}
                                className='
                                    min-w-[90%]
                                    sm:min-w-[70%]
                                    md:min-w-[50%]
                                    lg:min-w-[33%]
                                    xl:min-w-[25%]
                                '
                            >
                                <ProductCardLoading />
                            </div>
                        ))
                        : products.map((p) => (
                            <div
                                key={p.id}
                                className='
                                    min-w-[90%]
                                    sm:min-w-[70%]
                                    md:min-w-[50%]
                                    lg:min-w-[33%]
                                    xl:min-w-[25%]
                                '
                            >
                                <ProductCard product={p} />
                            </div>
                        ))}
                </div>


                {/* Right Arrow */}
                <button
                    onClick={() => scroll('right')}
                    className='hidden md:flex w-10 h-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/30 shadow-md cursor-pointer hover:bg-white/30 transition z-20 ml-3'
                >
                    →
                </button>

            </div>
        </section>
    );
}
