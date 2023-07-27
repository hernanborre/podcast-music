import { FindTrackByIDUseCase } from "../FindTrackByIDUseCase"
import { PodcastDetail } from "@/domain/models"

// Import the tracksDataMock
import { tracksDataMock } from "../../../utils/test-utils/PodcastModelMocks"
describe("FindTrackByIDUseCase", () => {
  let useCase: FindTrackByIDUseCase

  beforeEach(() => {
    useCase = new FindTrackByIDUseCase()
  })

  it("should return undefined when input tracksData is undefined", () => {
    const result = useCase.execute(undefined, "13131313")
    expect(result).toBeUndefined()
  })

  it("should return undefined when trackId is not found", () => {
    const result = useCase.execute(tracksDataMock, "nonExistentTrackId")
    expect(result).toBeUndefined()
  })

  it("should return the correct track when trackId is found", () => {
    const result = useCase.execute(tracksDataMock, "13131313")
    expect(result).toEqual(tracksDataMock[0])
  })

  it("should return the first matching track when there are multiple matches", () => {
    const duplicateTrack: PodcastDetail = {
      ...tracksDataMock[0],
      trackId: "newTrackId"
    }

    const inputTracksData: PodcastDetail[] = [...tracksDataMock, duplicateTrack, duplicateTrack]

    const result = useCase.execute(inputTracksData, "newTrackId")
    expect(result).toEqual(duplicateTrack)
  })
})
