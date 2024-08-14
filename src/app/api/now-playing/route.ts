import { NextResponse } from 'next/server';
import { getNowPlaying, getNowPlayingItem } from '../../../lib/spotify';

export async function GET() {
    const response = await getNowPlayingItem();
    const res = NextResponse.json(response);
    res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    return res
}
