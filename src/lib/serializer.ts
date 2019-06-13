import { SongBook } from './songbookService';

export const serialize = (sb: SongBook) => `
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
${sb.options.styles.join('')}
</head>
<body>
    <div id="title-page">
        ${sb.options.img && `<img src="${sb.options.img}" />`}
        <h1>${sb.title || ''}</h1>
        <h2>${sb.subtitle || ''}</h2>
        <p>${[sb.version, sb.date, sb.author].filter(x => x).join(', ')}</p>
        <p>${sb.credits || ''}</p>
    </div>
    <div id="toc">
        <h2>Obsah</h2>
        <ol>
            ${sb.songs.map(s => `<li><a href="#${s.id}">${s.title}</a></li>`).join('')}
        </ol>
    </div>
    <div id="content">
    ${sb.songs
        .map(
            s => `
        <div>
            <h2 id="${s.id}">${s.title}</h2>
            ${s.chords}
        </div>
    `
        )
        .join('')}
    </div>
</body>
`;
