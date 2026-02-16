'use client'
import ProductCarousel from '@/app/components/products/ProductCarousel';

export default function Features() {
    return (
        <section className='sicky w-full h-[30em] bg-[var(--grey-black)]'>
            <div className="max-w-7xl mx-auto px-8 py-20">
                <ProductCarousel />
            </div>
        </section>
    );
}