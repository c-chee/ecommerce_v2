/**
 * Products DB Route
 */
import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
    const [rows] = await db.query('SELECT * FROM products');
    return NextResponse.json(rows);
}


// Test for res
// import { NextResponse } from 'next/server';

// export async function GET() {
//     return NextResponse.json({ ok: true });
// }

