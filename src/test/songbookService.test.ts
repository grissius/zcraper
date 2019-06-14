import { songbookServiceMock } from './mock/songbookServiceMock';

describe('songbookService', () => {
    test('getSongbook', async () => {
        const sb = await songbookServiceMock.getSongbook(0);
        sb.songs = sb.songs.slice(0, 1);

        expect(sb).toMatchSnapshot({ date: expect.any(String) });
    });
});
