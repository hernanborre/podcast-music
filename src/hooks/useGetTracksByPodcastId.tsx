import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { useCallback } from "react"

export const useGetTracksByPodcastId = () => {
  const { podcastId } = useParams()
  const fetchTracks = useCallback(async () => {
    const URL = "https://itunes.apple.com/lookup?id="
    const queryParams = "&media=podcast&entity=podcastEpisode"
    const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`${URL}${podcastId}${queryParams}`)}`

    const response = await fetch(proxiedUrl)

    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch tracks for podcastId: " + podcastId)
    }
    const data = await response.json()
    return data
  }, [podcastId])
  const { isLoading, data, error } = useQuery(["tracks", podcastId], fetchTracks, {
    cacheTime: 1000 * 60 * 60 * 24,
  })
  return { isLoading, data, error }
}