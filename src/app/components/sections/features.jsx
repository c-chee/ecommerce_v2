'use client';
import ProductCarousel from '@/app/components/products/ProductCarousel';
import BoxButton from '@/app/components/ui/BoxButton';

export default function Features() {
    return (
        <section className='flex flex-col items-center justify-start w-full min-h-[45em] bg-[var(--grey-black)]'>
            <div className='w-full max-w-7xl mx-auto px-4 sm:px-7 lg:px-8 py-12 flex flex-col items-center'>
                <ProductCarousel />

                <BoxButton href='/products' className='mt-8'>
                    View All
                </BoxButton>
            </div>
        </section>
    );
}
