// pages/api/users.ts

import { apiPost } from '@/libs/db';

export async function POST(req: Request, res: Response) {
    // Handle GET requests if needed
    const query = 'UPDATE follows SET count = count + 1 WHERE id = ?'; // Assuming you have a specific follow entry
    const values = [1]; // Replace with the appropriate ID for the follow entry

    try {
        await apiPost(query, values);
        return new Response(JSON.stringify({ message: 'Successfully increased !' }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(JSON.stringify({ message: 'Error Occurred' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

}

export async function GET(req: Request) {
    return new Response(null, {
        status: 405,
        statusText: "Method Not Allowed",
        headers: { Allow: "POST" },
    });
}
