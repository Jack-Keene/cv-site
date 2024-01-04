import { NextResponse } from 'next/server';
import { getTopTracks } from '../../lib/spotify';

export async function GET() {
    const response = await getTopTracks();
    const { items } = await response.json();

    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
    }));

    return NextResponse.json(response)
}