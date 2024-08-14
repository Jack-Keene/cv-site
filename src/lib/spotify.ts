import { NextResponse } from 'next/server';
import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

// const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async () => {
    const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
    try {
        const response = await fetch(TOKEN_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
                'Cache-Control': 'no-store',
            },
            body: querystring.stringify({
                grant_type: "refresh_token",
                refresh_token,
            }),
        });

        // Check if the response is not ok
        if (!response.ok) {
            console.error(`Failed to fetch access token: ${response.status} ${response.statusText}`);
            throw new Error("Failed to fetch access token");
        }

        const data = await response.json();

        // Check if the response does not contain the access token
        if (!data.access_token) {
            throw new Error("Access token not found in the response");
        }

        // Return only the access token
        return data.access_token;
    } catch (error) {
        console.error("Error getting access token:", error);
        throw error;  // Re-throw the error after logging it
    }
};
export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Cache-Control': 'no-store',
        },
    });
};


export const getNowPlaying = async () => {
    const access_token  = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Cache-Control': 'no-store',
        },
        cache: 'no-store'
    });
};
export async function getNowPlayingItem() {
    const response = await getNowPlaying();
    if (response.status === 204 || response.status > 400) {
        return false;
    }

    const song = await response.json();
    if (song.currently_playing_type !== 'track') {
        return false
    }

    const albumImageUrl = song.item.album.images[0].url;
    const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
    const isPlaying = song.is_playing;
    const songUrl = song.item.external_urls.spotify;
    const title = song.item.name;

    return {
        albumImageUrl,
        artist,
        isPlaying,
        songUrl,
        title,
    };

};