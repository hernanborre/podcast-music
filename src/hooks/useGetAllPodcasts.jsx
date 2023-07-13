import { useQuery } from "@tanstack/react-query";

const URI_LIST_ALL_EPISODES = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

export const useGetAllPodcasts = () => {
  const fetchPodcastList = async () => {
    const response = await fetch(URI_LIST_ALL_EPISODES);
    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch podcasts");
    }
    return response.json();
  };
  const { isLoading, data, error } = useQuery(["podcasts"], fetchPodcastList, {
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { isLoading, data, error };
};
