/**
 * Redirect /products/[slug] → /products?category=[slug]
 */
'use client'; // Client-only for useRouter

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

export default function CategoryRedirect() {
    const { slug } = useParams(); // Get slug from URL
    const router = useRouter();

    // --- Redirect to query string format ---
    useEffect(() => {
        if (slug) {
            router.replace(`/products?category=${slug}`);
        }
    }, [slug, router]);

    return null; // Nothing rendered
}
