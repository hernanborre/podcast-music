import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

export const useGetTracksByPodcastId = () => {
  const { podcastId } = useParams();
  const fetchTracks = useCallback(async () => {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`
    );
    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch tracks for podcastId: " + podcastId);
    }
    return response.json();
  }, [podcastId]);
  const { isLoading, data, error } = useQuery(["tracks", podcastId], fetchTracks, {
    staleTime: 1000 * 60 * 60 * 24,
  });
  return { isLoading, data, error };
};
