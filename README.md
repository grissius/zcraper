<div align="center">

![](https://media1.giphy.com/media/3o72EX5QZ9N9d51dqo/giphy.gif?cid=790b76115d028f5a6d62616345f6ff32&rid=giphy.gif)

# Zcraper

[![forthebadge](https://forthebadge.com/images/badges/built-with-science.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/contains-cat-gifs.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-electricity.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-badges.svg)](https://forthebadge.com)


[![Build Status](https://img.shields.io/travis/com/grissius/zcraper/master.svg?style=flat-square)](https://travis-ci.com/grissius/zcraper)
[![Coverage](https://img.shields.io/codeclimate/coverage/grissius/zcraper.svg?style=flat-square)](https://codeclimate.com/github/grissius/zcraper)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/grissius/zcraper.svg?style=flat-square)](https://codeclimate.com/github/grissius/zcraper)
[![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/grissius/zcraper.svg?style=flat-square)](https://snyk.io/test/github/grissius/zcraper?targetFile=package.json)
[![Dependency Status](https://img.shields.io/david/grissius/zcraper.svg?style=flat-square)](https://david-dm.org/grissius/zcraper)
[![Dev Dependency Status](https://img.shields.io/david/dev/grissius/zcraper.svg?style=flat-square)](https://david-dm.org/grissius/zcraper?type=dev)

_Songbook scraper for [zpevniky.com](http://zpevniky.com)_


You have a songbook to manage and you keep it in a RTE document? If so, and you did any changes through the course of times, you are either dying, or an advanced wizard.

If its the former visit [zpevniky.com](http://zpevniky.com), create a songbook and come back here. With the little bit of JS you will be able to do marvels. Moreover, automate the whole process! If you change a song, just rerun zcraper, theme your songbook in any way your heart desires.

If its the latter, then get out of here, you magical thing, you are destined to do great things! :sparkles:



</div>

## Quickstart

1. Run example
```sh
npm install
npm build
npm start
```
2. Program output html files in the root dir. Open them in browser and print or save as PDF via a print dialog.
3. Modify the example in `src/index.ts` and roll!

```typescript
import { compose, loadCss, renameSongs, saveSongbook, sortSongs } from './lib/helpers';
import { songbookService } from './lib/songbookService';

(async () => {
    // get songbook via id
    const songbook = await songbookService.getSongbook(171);
    // implicit settings
    saveSongbook(songbook);
})();
```

```typescript
saveSongbook(songbook, {
    // my transformations
    fns: [songbook => { /* Do your magic if you want */ return songbook; }],
    // output filename
    filename: 'custom-output.html',
    // custom serialization function
    serialize: JSON.stringify,
});
```



## License

This project is licensed under [MIT](./LICENSE).
