import { GetAllPodcastsUseCase } from "../GetAllPodcastsUseCase"
import PodcastRepository from "@/domain/repository/PodcastRepository"
import { PodcastEpisode } from "@/domain/models"

describe("GetAllPodcastsUseCase", () => {
  let useCase: GetAllPodcastsUseCase
  let mockPodcastRepository: jest.Mocked<PodcastRepository>

  beforeEach(() => {
    // Create a mock instance of the PodcastRepository
    mockPodcastRepository = {
      getAllPodcasts: jest.fn(),
      getPodcastDetail: jest.fn()
    }

    // Create the instance of the GetAllPodcastsUseCase with the mock repository
    useCase = new GetAllPodcastsUseCase(mockPodcastRepository)
  })

  it("should return an empty array when no podcasts are available", async () => {
    // Mock the repository's response to return an empty array
    mockPodcastRepository.getAllPodcasts.mockResolvedValueOnce([])

    const result = await useCase.execute()
    expect(result).toEqual([])
  })

  it("should return an array of podcasts when available", async () => {
    const mockPodcasts: PodcastEpisode[] = [
      { id: "1", title: "Podcast 1", author: "Author 1", img: [], summary: "Summary 1" },
      { id: "2", title: "Podcast 2", author: "Author 2", img: [], summary: "Summary 2" }
    ]

    // Mock the repository's response to return the array of podcasts
    mockPodcastRepository.getAllPodcasts.mockResolvedValueOnce(mockPodcasts)

    const result = await useCase.execute()
    expect(result).toEqual(mockPodcasts)
  })
})
