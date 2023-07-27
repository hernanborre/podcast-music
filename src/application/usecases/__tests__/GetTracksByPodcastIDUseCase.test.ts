import { GetTracksByPodcastIDUseCase } from '../GetTracksByPodcastIDUseCase';
import PodcastRepository  from '@/domain/repository/PodcastRepository';
import { PodcastDetail } from '@/domain/models';
import { tracksDataMock } from "../../../utils/test-utils/PodcastModelMocks"

describe('GetTracksByPodcastIDUseCase', () => {
  let useCase: GetTracksByPodcastIDUseCase;
  let mockPodcastRepository: jest.Mocked<PodcastRepository>;

  beforeEach(() => {
    // Create a mock instance of the PodcastRepository
    mockPodcastRepository = {
      getPodcastDetail: jest.fn(),
      getAllPodcasts: jest.fn(),
    };

    // Create the instance of the GetTracksByPodcastIDUseCase with the mock repository
    useCase = new GetTracksByPodcastIDUseCase(mockPodcastRepository);
  });

  it('should return undefined when podcastId is not provided', async () => {
    const result = await useCase.execute();
    expect(result).toEqual(undefined);
  });

  it('should return an empty array when podcastId is provided but no tracks are available', async () => {
    // Mock the repository's response to return an empty array
    mockPodcastRepository.getPodcastDetail.mockResolvedValueOnce([]);

    const result = await useCase.execute('podcastId1');
    expect(result).toEqual([]);
  });

  it('should return an array of podcast tracks/details when available', async () => {
    const mockPodcastTracks: PodcastDetail[] = tracksDataMock

    // Mock the repository's response to return the array of podcast tracks
    mockPodcastRepository.getPodcastDetail.mockResolvedValueOnce(mockPodcastTracks);

    const result = await useCase.execute();
    expect(result).toEqual(mockPodcastTracks);
  });

});