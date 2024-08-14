import useSWR from "swr";

// @ts-expect-error
const fetcher = (...args: any) => fetch(...args).then((res) => res.json());

export function useNowPlaying() {
    const { data, error, isLoading } = useSWR(
        "/api/now-playing",
        fetcher,
        {
            refreshInterval: 5000,  // Adjust the interval
            revalidateOnFocus: true, // Revalidate when window gains focus
            revalidateOnReconnect: true, // Revalidate when reconnecting
            revalidateIfStale: true, // Revalidate if data is stale
            dedupingInterval: 0, // Ensure it fetches on each call
        }
    );

    return {
        data,
        error,
        isLoading,
    };
}
