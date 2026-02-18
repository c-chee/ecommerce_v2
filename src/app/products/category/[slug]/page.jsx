/**
 * [slug] URL friendly name
 * /products/[slug]
 * category=example
 */
'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function CategoryRedirect() {
    const { slug } = useParams();
    const router = useRouter();

    useEffect(() => {
        if (slug) {
            router.replace(`/products?category=${slug}`);
        }
    }, [slug, router]);

    return null;
}
