import { compose, loadCss, renameSongs, saveSongbook, sortSongs } from './lib/helpers';
import { songbookServiceMock } from './test/mock/songbookServiceMock';

const myTransformations = compose(
    sb => {
        sb.subtitle = 'Táborový zpěvník';
        sb.version = '1.0.0 Mockingjay';
        sb.author = 'Jaroslav Šmolík &lt;grissius@gmail.com&gt;';
        sb.options.img = 'https://i.imgur.com/oWj3Ecr.png';
        sb.options.styles.push(loadCss('themes/silmaril.css'));
        return sb;
    },
    renameSongs({
        'Protestsong (Malý kluk s černou hřívou)': 'Protestsong',
        'Vítr to Ví': 'Míle',
    }),
    sortSongs((a, b) => a.title.localeCompare(b.title))
);

(async () => {
    const sb = await songbookServiceMock.getSongbook(171);
    saveSongbook(sb, { fns: [myTransformations], filename: 'silmaril-chords.html' });
    saveSongbook(sb, {
        fns: [
            myTransformations,
            sb => {
                sb.options.styles.push(loadCss('no-chords.css'));
                return sb;
            },
        ],
        filename: 'silmaril.html',
    });
})();
