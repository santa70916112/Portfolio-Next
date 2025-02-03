/* eslint-disable  @typescript-eslint/no-explicit-any */

import { apiPost, apiGet } from '@/libs/db'; // Ensure apiGet is defined for fetching data

export async function POST() {
    const query = 'UPDATE follows SET count = count + 1 WHERE id = ?'; // Assuming you have a specific follow entry
    const values = [1]; // Replace with the appropriate ID for the follow entry

    try {
        await apiPost(query, values);
        return new Response(JSON.stringify({ message: 'Successfully increased!' }), {
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

export async function GET() {
    const query = 'SELECT count FROM follows ORDER BY id ASC LIMIT 1'; // Get the count from the first row

    try {
        const result = await apiGet(query); // Assuming apiGet handles the SELECT query
        if (result.length > 0) {
            return new Response(JSON.stringify({ count: result[0].count }), {
                status: 200,
                headers: { "Content-Type": "application/json" },
            });
        } else {
            return new Response(JSON.stringify({ message: 'No entry found.' }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }
    } catch (err: any) {
        return new Response(JSON.stringify({ message: 'Error Occurred' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
}
