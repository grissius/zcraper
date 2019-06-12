import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { SongbookServiceMock } from '../test/mock/songbookServiceMock';
import { serialize } from './serializer';

const loadCss = (filename: string) => `<style type="text/css">
${readFileSync(join('./src/assets', filename))}
</style>`;

const defaultStyle = loadCss('basic.css');
const customStyle = loadCss('themes/silmaril.css');

const nameMap: Record<string, string> = {
    'Protestsong (Malý kluk s černou hřívou)': 'Protestsong',
    'Vítr to Ví': 'Míle',
};

const ss = new SongbookServiceMock();
(async () => {
    const sb = await ss.getSongbook(171);
    sb.subtitle = 'Táborový zpěvník';
    sb.meta = `1.0.0 Mockingjay, ${new Date().toLocaleDateString()}, Jaroslav Šmolík &lt;grissius@gmail.com&gt;`;
    sb.songs = sb.songs
        .map(s => ({
            ...s,
            title: nameMap[s.title] || s.title,
        }))
        .sort((a, b) => a.title.localeCompare(b.title));
    sb.options.styles.push(defaultStyle);
    sb.options.styles.push(customStyle);
    const str = serialize(sb);
    writeFileSync('body2.html', str);
})();
