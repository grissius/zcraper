import { SongbookServiceMock } from './mock/songbookServiceMock';

const s = new SongbookServiceMock();

describe('songbookService', () => {
    test('getSongbook', async () => {
        const sb = await s.getSongbook(0);
        sb.songs = sb.songs.slice(0, 1);

        expect(sb).toMatchSnapshot();
    });
});
