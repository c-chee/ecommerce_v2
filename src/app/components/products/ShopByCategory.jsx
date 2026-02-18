/**
 * Shop by Category section
 * Displays category cards linking to the products page with pre-selected category
 */
'use client';

import LinkTile from '@/app/components/ui/LinkTile';

export default function ShopByCategory() {
    // --- CATEGORY DATA ---
    // Each category has a title, image, and slug used for filtering
    const categories = [
        {
            title: 'Stickers',
            image: '/akuna-top-view.JPEG',
            slug: 'sticker',
        },
        {
            title: 'Apparel',
            image: '/products/shirt-mascot-2.PNG',
            slug: 'apparel',
        },
        {
            title: 'Accessories',
            image: '/products/tsurikawa-2.PNG',
            slug: 'accessories',
        },
        {
            title: 'Lifestyle',
            image: '/products/cup-3.PNG',
            slug: 'lifestyle',
        },
    ];

    return (
        <section className='flex flex-col items-center justify-start w-full bg-[var(--grey-black)] lg:min-h-[40em]'>
            <div className='max-w-7xl mx-auto px-6 py-16'>
                {/* SECTION TITLE */}
                <h2 className='text-3xl font-semibold mb-10 text-center'>
                    - Shop by Category -
                </h2>

                {/* CATEGORY GRID */}
                <div
                    className='
                        grid gap-6
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                    '
                >
                    {/* Loop through categories and create a tile for each */}
                    {categories.map((cat) => (
                        <LinkTile
                            key={cat.slug}
                            title={cat.title}
                            image={cat.image}
                            href={`/products?category=${cat.slug}`} // full link, pre-selects category
                        />
                    ))}

                </div>
            </div>
        </section>
    );
}
