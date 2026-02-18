/**
 * Products Page
 * /products
 * Filters by category via query string (?category=sticker)
 */
'use client'; // Indicates this is a client side component

import { useState, useEffect } from 'react'; // React hooks
import { useSearchParams } from 'next/navigation'; // For query parameters

// Component imports
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48; // Specifies the number of products per page, used in pagination

// React functional component
export default function ProductsPage() {
    const searchParams = useSearchParams(); // Get query string
    const urlCategory = searchParams?.get('category'); // ?category=<slug>

    // --- State ---
    const [products, setProducts] = useState([]); // stores all product data fetched
    const [category, setCategory] = useState('all'); // Current category filter
    const [sort, setSort] = useState('featured'); // Current sort method
    const [page, setPage] = useState(1); // Current page for pagination
    const [loading, setLoading] = useState(true); // Loading state

    // --- Fetch products from API ---
    useEffect(() => {
        setLoading(true); // show loading cards

        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data); // Update state to fetched data
                setLoading(false); // stop loading
            })
            .catch(console.error); // Log any errors
    }, []); // Only fetch once

    // --- Sync category from URL query ---
    useEffect(() => {
        if (urlCategory) {
            setCategory(urlCategory);
            setPage(1); // Reset page when category changes
        } else {
            setCategory('all'); // Default to all
        }
    }, [urlCategory]);

    // --- CATEGORY FILTER ---
    // Filters products based on selected category
    const filtered =
        category === 'all'
            ? products
            : products.filter(p => p.type === category);

    // --- SORTING ---
    let sorted = [...filtered]; // Create a copy for sorting
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- PAGINATION ---
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE); // Total number of pages
    const start = (page - 1) * PRODUCTS_PER_PAGE; // Index of first product on current page
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE); // Products to display

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
                <h1 className='text-3xl font-semibold mb-6'>
                    Products
                </h1>

                {/* Category Tabs */}
                <CategoryTabs
                    categories={categories}
                    active={category}
                    onChange={c => {
                        setCategory(c);
                        setPage(1); // Reset page when changing category
                    }}
                />

                {/* Sort Bar */}
                <SortBar
                    total={sorted.length}
                    sort={sort}
                    options={sortOptions}
                    onSortChange={setSort}
                    className='my-6'
                />

                {/* Product Grid */}
                <ProductGrid products={visibleProducts} loading={loading} />

                {/* Pagination */}
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    onChange={setPage}
                />
            </div>
        </section>
    );
}
