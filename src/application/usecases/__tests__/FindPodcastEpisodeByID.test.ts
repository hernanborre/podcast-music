import { FindPodcastEpisodeByID } from '../FindPodcastEpisodeByID';
import { PodcastEpisode } from '@/domain/models';

import { podcastEpisodeMock } from "../../../utils/test-utils/PodcastModelMocks"

describe('FindPodcastEpisodeByID', () => {
  let useCase: FindPodcastEpisodeByID;

  beforeEach(() => {
    useCase = new FindPodcastEpisodeByID();
  });

  it('should return undefined when input data is undefined', () => {
    const result = useCase.execute(undefined, '131313');
    expect(result).toBeUndefined();
  });

  it('should return undefined when input data is null', () => {
    const result = useCase.execute(null, '131313');
    expect(result).toBeUndefined();
  });

  it('should return undefined when podcastId is not found', () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, id: '111' },
      { ...podcastEpisodeMock, id: '222' },
      { ...podcastEpisodeMock, id: '333' },
    ];

    const result = useCase.execute(inputPodcasts, '131313');
    expect(result).toBeUndefined();
  });

  it('should return the correct podcast when podcastId is found', () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, id: '111' },
      { ...podcastEpisodeMock, id: '131313' },
      { ...podcastEpisodeMock, id: '222' },
    ];

    const result = useCase.execute(inputPodcasts, '131313');
    expect(result).toEqual({ ...podcastEpisodeMock, id: '131313' });
  });

  it('should return the first matching podcast when there are multiple matches', () => {
    const inputPodcasts: PodcastEpisode[] = [
      { ...podcastEpisodeMock, id: '131313' },
      { ...podcastEpisodeMock, id: '131313' },
      { ...podcastEpisodeMock, id: '131313' },
    ];

    const result = useCase.execute(inputPodcasts, '131313');
    expect(result).toEqual({ ...podcastEpisodeMock, id: '131313' });
  });
});