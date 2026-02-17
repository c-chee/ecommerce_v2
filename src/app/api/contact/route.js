/**
 * Contacts DB Route
 */
import db from '@/lib/db';

export async function POST(req) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, message } = body;

        if (!firstName || !lastName || !email || !message) {
            return Response.json(
                { error: 'All fields required' },
                { status: 400 }
            );
        }

        await db.execute(
            `INSERT INTO contacts 
            (first_name, last_name, email, message)
            VALUES (?, ?, ?, ?)`,
            [firstName, lastName, email, message]
        );

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json({ error: 'Server error' }, { status: 500 });
    }
}
