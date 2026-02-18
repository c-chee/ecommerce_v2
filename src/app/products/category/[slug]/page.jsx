/**
 * [slug] URL friendly name
 * /products/[slug]
 * category=example
 */
'use client'; // This is a client-side only component

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

// This component handles redirecting from /products/[slug] 
// to the main /products page with a URL query for filtering
export default function CategoryRedirect() {
    const { slug } = useParams(); // 'sticker', 'apparel', etc.
    const router = useRouter();    // Next.js router

    // --- Redirect logic ---
    // When the slug is available, navigate to /products?category=slug
    useEffect(() => {
        if (slug) {
            // Replace the current URL so user doesn't stay on /products/[slug]
            router.replace(`/products?category=${slug}`);
        }
    }, [slug, router]);

    // Return null because this component doesn't render anything itself
    return null;
}
