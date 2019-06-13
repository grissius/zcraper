import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { serialize } from './serializer';
import { Song, SongBook } from './songbookService';

export const loadCss = (filename: string) => `<style type="text/css">
${readFileSync(join('./src/assets', filename))}
</style>`;

type SongbookTransformation = (sb: SongBook) => SongBook;

export const renameSongs = (nameMap: Record<string, string>): SongbookTransformation => sb => {
    sb.songs = sb.songs.map(s => ({
        ...s,
        title: nameMap[s.title] || s.title,
    }));
    return sb;
};

export const sortSongs = (cmp: (a: Song, b: Song) => any): SongbookTransformation => sb => {
    sb.songs = sb.songs.sort(cmp);
    return sb;
};

export const compose = (...fns: SongbookTransformation[]): SongbookTransformation => sb =>
    fns.reduce((res, fn) => fn(res), sb);

export const saveSongbook = (
    sb: SongBook,
    opts: {
        fns?: SongbookTransformation[];
        serialize?: (sb: SongBook) => string;
        filename?: string;
    } = {}
) => {
    const defaultOptions = {
        serialize,
        fns: [],
        filename: 'output.html',
    };
    const options = { ...defaultOptions, ...opts };
    writeFileSync(options.filename, options.serialize(compose(...options.fns)(sb)));
};
