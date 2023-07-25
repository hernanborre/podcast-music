import PodcastRepository from "@/domain/repository/PodcastRepository";
import Episode from "@/infraestructure/repository/dtos/Episode/EpisodeDTO"
import { useQuery } from "@tanstack/react-query"

export class FetchPodcastRepository implements PodcastRepository {
    // es importante que la implementación de esta interfaz devuelvan
    // la información de MI MODEL (el propio chico y limpio)
    // aquí hacemos la adptación del DTO del Response a nuestro modelo que 
    // luego usará la view

  
    static URI_LIST_ALL_EPISODES = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    
    getAllPodcasts() {
        
    } 

     useGetAllPodcasts = () => {
      const fetchPodcastList = async (): Promise<Episode[]> => {
        const response = await fetch(FetchPodcastRepository.URI_LIST_ALL_EPISODES)
        if (!response.ok) {
          console.error(response)
          throw new Error("Failed to fetch podcasts")
        }
        const responseData = await response.json()
        return responseData?.feed?.entry
      }
    
      const { isLoading, data, error } = useQuery(["podcasts"], fetchPodcastList, {
        cacheTime: 1000 * 60 * 60 * 24
      })
      return { isLoading, data, error }
    }

}