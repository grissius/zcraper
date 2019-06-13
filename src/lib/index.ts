import { writeFileSync } from 'fs';
import { SongbookServiceMock } from '../test/mock/songbookServiceMock';
import { loadCss } from './helpers';
import { serialize } from './serializer';

const nameMap: Record<string, string> = {
    'Protestsong (Malý kluk s černou hřívou)': 'Protestsong',
    'Vítr to Ví': 'Míle',
};

const ss = new SongbookServiceMock();
(async () => {
    const sb = await ss.getSongbook(171);

    sb.subtitle = 'Táborový zpěvník';
    sb.version = '1.0.0 Mockingjay';
    sb.author = 'Jaroslav Šmolík &lt;grissius@gmail.com&gt;';
    sb.options.img = 'https://i.imgur.com/oWj3Ecr.png';
    sb.songs = sb.songs
        .map(s => ({
            ...s,
            title: nameMap[s.title] || s.title,
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
    sb.options.styles.push(loadCss('themes/silmaril.css'));
    writeFileSync('body2.html', serialize(sb));
    sb.options.styles.push(loadCss('no-chords.css'));
    writeFileSync('body3.html', serialize(sb));
})();
