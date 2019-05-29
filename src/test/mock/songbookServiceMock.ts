import { readFileSync } from 'fs';
import { resolve } from 'path';
import { SongbookService } from '../../lib/songbookService';

export class SongbookServiceMock extends SongbookService {
    public songbookPrintBody: SongbookService['songbookPrintBody'] = async () => {
        return readFileSync(resolve(__dirname, './songbook.html'), 'utf8');
    }
}
