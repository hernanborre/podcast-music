import { screen, render } from '@testing-library/react';
import { PodcastEpisodeDetailCard } from './PodcastEpisodeDetailCard';
import { TestWithMemoryRouter } from '../../../../utils/test-utils/TestWrapperComponent';
import "@testing-library/jest-dom/extend-expect";


describe('PodcastEpisodeDetailCard component tests', () => {
    const currentTrack = {
        description: 'Test Description',
        trackName: 'Test Track',
        shortDescription: 'Test Short Description',
        episodeUrl: 'Test Episode Url',
        episodeName: 'Test Episode Name'
    };
    test('should render', () => {
        render(<PodcastEpisodeDetailCard currentTrack={currentTrack} />, {
            wrapper: TestWithMemoryRouter
        });
        const cardName = screen.getByText(/Test Track/i);
        expect(cardName).toBeInTheDocument();
    });
    test('audio player should be visible', () => {
        render(<PodcastEpisodeDetailCard currentTrack={currentTrack} />, {
            wrapper: TestWithMemoryRouter
        });
        const audioPlayer = screen.getByTestId('audio-player-test-id');
        expect(audioPlayer).toBeInTheDocument();
    });
});