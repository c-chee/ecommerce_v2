'use client'; // Indicates that this is a client side component

import { useEffect, useState } from 'react'; // Import react hooks

// Component imports
import ProductGrid from '@/app/components/products/ProductGrid';
import CategoryTabs from '@/app/components/products/CategoryTab';
import SortBar from '@/app/components/products/SortBar';
import Pagination from '@/app/components/products/Pagination';

const PRODUCTS_PER_PAGE = 48; // Specifies the number of products per page, used in pagination

// react functional component
// 'export default' allows other parts of your app to import this component
export default function Products() {

    // products, stores all the product data fetched from the server
    // setProducts, function to update the products
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState('all'); // Selects initial category filter
    const [sort, setSort] = useState('featured'); // Selects inital sort method
    const [page, setPage] = useState(1); // For pagination, stes to page 1

    // --- Fetch products from API ---
    useEffect(() => {
        fetch('/api/products') // GET /api/products
        .then(res => res.json()) // Convert res to JSON
        .then(setProducts)  // Update state to the fetched data
        .catch(console.error); // To log any errors
    }, []);

    // --- CATEGORY FILTER ---
    // Filters products based on selecte category. 
    const filtered =
        category === 'all'
        ? products
        : products.filter(p => p.type === category);

    // --- SORTING ---
    const sorted = [...filtered]; // Creates a copy of the filterd products list
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
                    setCategory(c);
                    setPage(1); // reset page when changing category
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
                <ProductGrid products={visibleProducts} />

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
