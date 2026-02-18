'use client'; // Indicates that this is a client side component

import { useEffect, useState } from 'react'; // Import react hooks
import { useSearchParams } from 'next/navigation'; // For reading query params

// Component imports
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48; // Specifies the number of products per page, used in pagination

// react functional component
// 'export default' allows other parts of your app to import this component
export default function Products() {
    const searchParams = useSearchParams(); // get query params
    const urlCategory = searchParams.get('category'); // read category from URL

    // --- State ---
    const [products, setProducts] = useState([]); // all products fetched from API
    const [category, setCategory] = useState(urlCategory || 'all'); // initial category filter
    const [sort, setSort] = useState('featured'); // initial sort method
    const [page, setPage] = useState(1); // pagination page
    const [loading, setLoading] = useState(true); // loading state

    // --- Fetch products from API ---
    useEffect(() => {
        setLoading(true); // show loading cards while fetching
        fetch('/api/products') // GET /api/products
            .then(res => res.json()) // parse JSON
            .then(data => {
                setProducts(data); // set all products
                setLoading(false); // stop loading
            })
            .catch(console.error);
    }, []);

    // --- Sync category from URL ---
    // This ensures the filter updates when the URL changes
    useEffect(() => {
        if (urlCategory) {
            setCategory(urlCategory);
            setPage(1); // reset page when category changes
        }
    }, [urlCategory]);

    // --- CATEGORY FILTER ---
    // Filters products based on selected category
    const filtered =
        category === 'all'
        ? products
        : products.filter(p => p.type === category);

    // --- SORTING ---
    const sorted = [...filtered]; // copy filtered products
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- PAGINATION ---
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE); // total pages
    const start = (page - 1) * PRODUCTS_PER_PAGE; // index of first product on current page
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE); // products to display

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
        { value: 'a-z', label: 'Alphabetical: A–Z' },
        { value: 'z-a', label: 'Alphabetical: Z–A' },
        { value: 'low-high', label: 'Price: Low to High' },
        { value: 'high-low', label: 'Price: High to Low' },
    ];

    return (
        <section className='bg-[var(--grey-black)] pb-28'>
            <div className='max-w-7xl mx-auto px-6 lg:py-16'>
                <h1 className='text-3xl font-semibold mb-6'>Products</h1>

                {/* Category Tabs */}
                <CategoryTabs
                    categories={categories}
                    active={category}
                    onChange={c => {
                        setCategory(c); // update selected category
                        setPage(1); // reset page when changing category
                    }}
                />

                {/* Sort Bar */}
                <SortBar
                    total={sorted.length} // show total filtered products
                    sort={sort}
                    options={sortOptions}
                    onSortChange={setSort} // update sort method
                    className='my-6'
                />

                {/* Product Grid */}
                <ProductGrid products={visibleProducts} loading={loading} />

                {/* Pagination */}
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={setPage} // update page number
                />
            </div>
        </section>
    );
}
