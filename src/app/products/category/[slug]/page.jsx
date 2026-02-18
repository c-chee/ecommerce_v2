/**
 * [slug] URL friendly name
 * /products/[slug]
 * category=example
 */
'use client'; // Client-side only because we fetch and filter on the client

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Dynamic route params
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48;

export default function CategoryPage() {
    const { slug } = useParams(); // 'sticker', 'apparel', etc.

    // --- States ---
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState('featured');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // --- Fetch all products ---
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

    // --- Filter products by slug/category ---
    const filtered = slug === 'all'
        ? products
        : products.filter(p => p.type === slug); // matches your DB category names

    // --- Sort ---
    const sorted = [...filtered];
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- Pagination ---
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE);

    // --- Category tabs ---
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
                active={slug} // current category from URL
                onChange={c => {
                    // Navigate to new category page
                    window.location.href = `/products/${c}`; 
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
                <Pagination page={page} totalPages={totalPages} onChange={setPage} />
            </div>
        </section>
    );
}
