import logger from 'cosmas';
import { Microservice } from 'desmond';
import { HTMLElement, parse } from 'node-html-parser';

export interface SongBook {
    title: string;
    subtitle?: string;
    meta?: string;
    author?: string;
    songs: { author: string; title: string; chords: string; id: string }[];
    options: {
        styles: string[];
    };
}

export class SongbookService extends Microservice {
    constructor() {
        super('https://zpevniky.com', {}, logger);
    }
    public songbookPrintBody = async (id: number) => {
        return (await this.get('/api/export-zpevnik-html', { zpevnik: id, print: 1 })).body;
    }
    public getSongbook = async (id: number): Promise<SongBook> => {
        const document = parse(await this.songbookPrintBody(id), { style: true }) as HTMLElement;
        const title = document.querySelector('h1').text;
        const styles = document.querySelectorAll('style').map(s => s.outerHTML);
        const songs = document.querySelectorAll('.pisnicka').map(d => {
            const [author, title] = d.querySelectorAll('h2 span').map(s => s.text);
            const id = d.attributes['id'];
            const chords = d.querySelector('.chords').outerHTML;
            return { author, title, chords, id };
        });
        return {
            title,
            songs,
            options: {
                styles,
            },
        };
    }
}
