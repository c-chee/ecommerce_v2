'use client';
import ProductCarousel from '@/app/components/products/ProductCarousel';
import BoxButton from '@/app/components/ui/BoxButton';

export default function Features() {
    return (
        <section className='flex flex-col items-center justify-center w-full h-[45em] bg-[var(--grey-black)]'>
            <div className='max-w-7xl mx-auto px-8 py-14 flex flex-col items-center'>
                <ProductCarousel />

                <BoxButton href='/products' className='mt-8'>
                    View All
                </BoxButton>
            </div>
        </section>
    );
}
