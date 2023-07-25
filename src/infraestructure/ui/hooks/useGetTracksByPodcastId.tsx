import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { useCallback } from "react"
import { PodcastDetailResponseDTO } from "@/infraestructure/repository/dtos/PodcastDetail/PodcastDetailResponseDTO"

export const useGetTracksByPodcastId = () => {
  const { podcastId } = useParams()
  const fetchTracks = useCallback(async (): Promise<PodcastDetailResponseDTO> => {
    const URL = "https://itunes.apple.com/lookup?id="
    const queryParams = "&media=podcast&entity=podcastEpisode"
    const proxiedUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(`${URL}${podcastId}${queryParams}`)}`

    const response = await fetch(proxiedUrl)

    if (!response.ok) {
      console.error(response)
      throw new Error("Failed to fetch tracks for podcastId: " + podcastId)
    }
    const data = await response.json()
    //console.log(data);
    return data
  }, [podcastId])
  const { isLoading, data, error } = useQuery(["tracks", podcastId], fetchTracks, {
    cacheTime: 1000 * 60 * 60 * 24
  })
  console.log(data)
  return { isLoading, data, error }
}
