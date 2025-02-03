/* eslint-disable  @typescript-eslint/no-explicit-any */

import supabase from "@/libs/init";

export async function POST() {
    // Fetch the current count first
    const { data: currentData, error: fetchError } = await supabase
        .from('follows')
        .select('count')
        .eq('id', 1) // Adjust the ID as needed
        .single();

    if (fetchError) {
        console.error(fetchError);
        return new Response(JSON.stringify({ message: 'Error Occurred while fetching count' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const newCount = (currentData?.count || 0) + 1; // Increment the count

    // Update the count in the database
    const { error } = await supabase
        .from('follows')
        .update({ count: newCount })
        .match({ id: 1 }); // Replace with the appropriate ID for the follow entry

    if (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: 'Error Occurred' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ message: 'Successfully increased!' }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}


export async function GET() {
    const { data, error } = await supabase
        .from('follows')
        .select('count')
        .order('id', { ascending: true })
        .limit(1)
        .single(); // Get the count from the first row

    if (error) {
        console.error('error', error);
        return new Response(JSON.stringify({ message: 'Error Occurred' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }
    if (data) {
        return new Response(JSON.stringify({ count: data.count }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } else {
        return new Response(JSON.stringify({ message: 'No entry found.' }), {
            status: 404,
            headers: { "Content-Type": "application/json" },
        });
    }
}
