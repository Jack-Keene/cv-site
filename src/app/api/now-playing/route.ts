import { NextResponse } from 'next/server';
import { getNowPlaying, getNowPlayingItem } from '../../../lib/spotify';

export async function GET() {
    const response = await getNowPlayingItem();
    return NextResponse.json(response)
}
