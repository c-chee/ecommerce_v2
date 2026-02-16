import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
    try {
        const [rows] = await db.query(
            'SELECT * FROM products ORDER BY id DESC'
        );

        return NextResponse.json(rows);
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}
