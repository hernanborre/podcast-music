import { FilteredPodcastsUseCase } from "../FilteredPodcastUseCase"
import { PodcastEpisode } from "@/domain/models"

import { podcastEpisodeMock } from "../../../utils/test-utils/PodcastModelMocks"

describe("FilteredPodcastsUseCase", () => {
  let useCase: FilteredPodcastsUseCase

  beforeEach(() => {
    useCase = new FilteredPodcastsUseCase()
  })

  it("should return undefined when input podcasts are undefined", () => {
    const result = useCase.execute(undefined, "filter")
    expect(result).toEqual(undefined)
  })

  it("should return the same array when filter is not provided", () => {
    const inputPodcasts: PodcastEpisode[] = [podcastEpisodeMock, podcastEpisodeMock]
    const result = useCase.execute(inputPodcasts)
    expect(result).toEqual(inputPodcasts)
  })

  it("should filter podcasts by title", () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, title: "This is a test podcast" },
      { ...podcastEpisodeMock, title: "Another test podcast" },
      { ...podcastEpisodeMock, title: "Third podcast" }
    ]

    const result = useCase.execute(inputPodcasts, "test")
    expect(result).toEqual([
      { ...podcastEpisodeMock, title: "This is a test podcast" },
      { ...podcastEpisodeMock, title: "Another test podcast" }
    ])
  })

  it("should not be case sensitive", () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, title: "Testing 123" },
      { ...podcastEpisodeMock, title: "This is a TEST" },
      { ...podcastEpisodeMock, title: "test case" }
    ]
    const totalLengthOfResults = inputPodcasts.length

    const result = useCase.execute(inputPodcasts, "TEST")
    expect(result?.length).toEqual(totalLengthOfResults)
  })

  it("should return an empty array if no podcast matches the filter", () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, title: "Podcast 1" },
      { ...podcastEpisodeMock, title: "Podcast 2" },
      { ...podcastEpisodeMock, title: "Podcast 3" }
    ]

    const result = useCase.execute(inputPodcasts, "FilterNotInPodcasts")
    expect(result).toEqual([])
  })
})
