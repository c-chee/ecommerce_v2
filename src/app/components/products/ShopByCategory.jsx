import LinkTile from '@/app/components/ui/LinkTile';

export default function ShopByCategory() {
    // --- Props ---
    const categories = [
        {
            title: 'Stickers',
            image: '/akuna-top-view.JPEG',
            href: '/products?category=sticker',
        },
        {
            title: 'Apparel',
            image: '/products/shirt-mascot-2.PNG',
            href: '/products?category=apparel',
        },
        {
            title: 'Accessories',
            image: '/products/tsurikawa-2.PNG',
            href: '/products?category=accessories',
        },
        {
            title: 'Lifestyle',
            image: '/products/cup-3.PNG',
            href: '/products?category=lifestyle',
        },
    ];

    return (
        <section className='flex flex-col items-center justify-start w-full bg-[var(--grey-black)] lg:min-h-[40em]'>

            <div className='max-w-7xl mx-auto px-6 py-16'>
                <h2 className='text-3xl font-semibold mb-10 text-center'>
                    - Shop by Category -
                </h2>

                <div
                    className='
                        grid gap-6
                        grid-cols-1
                        sm:grid-cols-2
                        lg:grid-cols-4
                    '
                >
                    {/* Loops though array of objects above with a callback function (cat = one category object) and returns each component individually */}
                    {categories.map((cat) => (
                        <LinkTile key={cat.href} {...cat} />
                    ))}

                </div>
            </div>

        </section>
    );
}
