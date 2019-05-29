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
        <h3>${sb.subtitle}</h3>
        <p>${sb.meta}</p>
    </div>
    <div id="content">
    ${sb.songs
        .map(
            s => `
        <div>
            <h2>${s.title}</h2>
            ${s.chords}
        </div>
    `
        )
        .join('')}
    </div>
</body>
`;
