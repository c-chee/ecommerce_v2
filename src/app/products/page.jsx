'use client'; // Make this entire page client-side

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

// Component imports
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48; // Number of products per page

export default function Products() {
    const searchParams = useSearchParams(); // Client-only
    const urlCategory = searchParams.get('category'); // ?category=sticker, etc.

    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all'); // Initial category filter
    const [sort, setSort] = useState('featured'); // Initial sort method
    const [page, setPage] = useState(1); // Pagination page
    const [loading, setLoading] = useState(true); // Loading state

    // --- Fetch products from API ---
    useEffect(() => {
        setLoading(true);
        fetch('/api/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    // --- Sync category from URL ---
    useEffect(() => {
        if (urlCategory) {
            setCategory(urlCategory);
            setPage(1); // Reset page when URL category changes
        }
    }, [urlCategory]);

    // --- CATEGORY FILTER ---
    const filtered =
        category === 'all'
        ? products
        : products.filter(p => p.type === category);

    // --- SORTING ---
    let sorted = [...filtered];
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- PAGINATION ---
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE);

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
        { value: 'z-a', label: 'Alphabetical Z–A' },
        { value: 'low-high', label: 'Price Low → High' },
        { value: 'high-low', label: 'Price High → Low' },
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
                        setCategory(c);
                        setPage(1); // Reset page when changing tab
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
