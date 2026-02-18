/**
 * [slug] URL friendly name
 * /products/[slug]
 */
'use client'; // Indicates that this is a client side component

import { useEffect, useState } from 'react'; // Import react hooks

// Component imports
import { useParams } from 'next/navigation';
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48; // Specifies the number of products per page, used in pagination

// react functional component
// 'export default' allows other parts of your app to import this component
export default function CategoryPage() {
    const { slug } = useParams(); // 'stickers', 'apparel', etc.
    const [category, setCategory] = useState('all'); // Selects initial category filter
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('featured'); // Selects inital sort method
    const [page, setPage] = useState(1); // For pagination, stes to page 1
    const [loading, setLoading] = useState(true); // For loading cards while waiting

    // --- Fetch products from API ---
    useEffect(() => {
        setLoading(true);   // show loading cards
        setPage(1);         // reset page when category changes

        fetch('/api/products') // GET /api/products
            .then(res => res.json()) // Convert res to JSON
            .then(data => {
                setProducts(data); // Update state to the fetched data
                setLoading(false); // stop loading
            })
            .catch(console.error); // To log any errors
    }, [slug]); // refetch when slug changes

    // --- CATEGORY FILTER ---
    // Filter by category [slug]
    const filtered = products.filter(p => p.type === slug);

    // --- SORTING ---
    let sorted = [...filtered]; // Creates a copy of the filterd products list
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- PAGINATION ---
    // ... for when there are more than 48 products
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE); // Calculates totl number of page based on product
    const start = (page - 1) * PRODUCTS_PER_PAGE; // Calculates the inec of the first product, current page
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE); // Extract only the products that needs to be displayed

    // ---------- CONFIG ----------
    const categories = [
        { id: 'all', label: 'All' },
        { id: 'sticker', label: 'Stickers' },
        { id: 'apparel', label: 'Apparel' },
        { id: 'accessories', label: 'Accessories' },
        { id: 'lifestyle', label: 'Lifestyle' },
    ];

    const sortOptions = [
        { value: 'featured', label: 'Featured' },
        { value: 'a-z', label: 'Alphabetical A–Z' },
        { value: 'z-a', label: 'Alphabetical Z–A' },
        { value: 'low-high', label: 'Price Low → High' },
        { value: 'high-low', label: 'Price High → Low' },
    ];

    return (
        <section className='bg-[var(--grey-black)] pb-28'>
            <div className='max-w-7xl mx-auto px-6 lg:py-16'>
                <h1 className='text-3xl font-semibold mb-6'>
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                </h1>

                {/* Category Tabs */}
                <CategoryTabs
                    categories={categories}
                    active={category}
                    onChange={c => {
                    setCategory(c);
                    setPage(1); // reset page when changing category
                    }}
                />

                <SortBar
                    total={sorted.length}
                    sort={sort}
                    options={sortOptions}
                    onSortChange={setSort}
                    className='mb-6'
                />

                <ProductGrid products={visibleProducts} loading={loading} />

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={setPage}
                />
            </div>
        </section>
    );
}
