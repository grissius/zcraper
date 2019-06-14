import { readFileSync } from 'fs';
import { SongbookService } from '../../lib/songbookService';

export class SongbookServiceMock extends SongbookService {
    public songbookPrintBody: SongbookService['songbookPrintBody'] = async () => {
        return readFileSync('src/test/mock/songbook.html', 'utf8');
    }
}

export const songbookServiceMock = new SongbookServiceMock();
