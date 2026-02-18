/**
 * Products Page
 * Uses client-side React state to read pre-selected category
 */
'use client';

import { useEffect, useState } from 'react';
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48;

export default function ProductsPage() {
    // --- States ---
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all'); // default to all
    const [sort, setSort] = useState('featured');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // --- Fetch products ---
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

    // --- Sync category from localStorage (Home Page redirect) ---
    useEffect(() => {
        const storedCategory = window.localStorage.getItem('selectedCategory');
        if (storedCategory) {
            setCategory(storedCategory);
            setPage(1);
            window.localStorage.removeItem('selectedCategory'); // clear after use
        }
    }, []);

    // --- Filter ---
    const filtered = category === 'all' ? products : products.filter(p => p.type === category);

    // --- Sort ---
    let sorted = [...filtered];
    if (sort === 'a-z') sorted.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'z-a') sorted.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'low-high') sorted.sort((a, b) => a.price - b.price);
    if (sort === 'high-low') sorted.sort((a, b) => b.price - a.price);

    // --- Pagination ---
    const totalPages = Math.ceil(sorted.length / PRODUCTS_PER_PAGE);
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    const visibleProducts = sorted.slice(start, start + PRODUCTS_PER_PAGE);

    // --- Config ---
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
        { value: 'low-high', label: 'Price: Low → High' },
        { value: 'high-low', label: 'Price: High → Low' },
    ];

    return (
        <section className='bg-[var(--grey-black)] pb-28'>
            <div className='max-w-7xl mx-auto px-6 lg:py-16'>
                <h1 className='text-3xl font-semibold mb-6'>Products</h1>

                <CategoryTabs
                    categories={categories}
                    active={category}
                    onChange={c => {
                        setCategory(c);
                        setPage(1);
                    }}
                />

                <SortBar
                    total={sorted.length}
                    sort={sort}
                    options={sortOptions}
                    onSortChange={setSort}
                    className='my-6'
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
