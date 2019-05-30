import { SongBook } from './songbookService';

export const serialize = (sb: SongBook) => `
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
${sb.options.styles.join('')}
</head>
<body>
    <div id="title-page">
        <img src="https://i.imgur.com/oWj3Ecr.png" />
        <h1>${sb.title}</h1>
        <h2>${sb.subtitle}</h2>
        <p>${sb.meta}</p>
        <p>Creted with ️️<a href="http://zpevniky.com">zpevniky.com</a> and <a href="https://github.com/grissius/zcraper">grissius/zcraper</a></p>
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
