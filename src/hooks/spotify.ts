import useSWR from "swr";

// @ts-expect-error
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export function useNowPlaying() {
    const { data, error, isLoading } = useSWR(
        "http://localhost:3000/api/now-playing",
        fetcher,
        { refreshInterval: 3000 }
    );

    return {
        data,
        error,
        isLoading,
    };
}
