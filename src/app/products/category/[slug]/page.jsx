/**
 * Redirect to /products with category state
 * Optional if you want pretty URLs like /products/sticker
 */
'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function CategoryRedirect() {
    const { slug } = useParams();
    const router = useRouter();

    useEffect(() => {
        if (slug) {
            // Redirect to main products page
            // Category will be updated via React state there
            router.replace('/products'); 
        }
    }, [slug, router]);

    return null;
}

