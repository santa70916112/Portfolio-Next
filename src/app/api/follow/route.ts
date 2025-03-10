/* eslint-disable  @typescript-eslint/no-explicit-any */

import supabase from "@/libs/init";

export async function POST(request: Request) {
    // Get the client's IP address from headers
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('remote-addr');
    console.log('ip', ip);

    // Check if the IP has already followed
    const { data: ipCheck, error: ipError } = await supabase
        .from('follows')
        .select('ip_address')
        .eq('ip_address', ip)
        .single();

    if (ipError) {
        console.error(ipError);
        return new Response(JSON.stringify({ message: 'Error occurred while checking IP' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    // If the IP already exists, do not insert
    if (ipCheck) {
        return new Response(JSON.stringify({ message: 'This IP has already followed.' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    // Store the IP address to prevent double following
    const { error: insertError } = await supabase
        .from('follows')
        .insert({ ip_address: ip });

    if (insertError) {
        console.error(insertError);
        return new Response(JSON.stringify({ message: 'Error occurred while recording IP' }), {
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
    // Count distinct IP addresses that have followed
    const { count, error } = await supabase
        .from('follows')
        .select('ip_address', { count: 'exact', head: true })
    console.log('count', count);
    if (error) {
        console.error('error', error);
        return new Response(JSON.stringify({ message: 'Error occurred' }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    return new Response(JSON.stringify({ totalUniqueFollowers: count }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
