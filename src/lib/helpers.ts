import { readFileSync } from 'fs';
import { join } from 'path';

export const loadCss = (filename: string) => `<style type="text/css">
${readFileSync(join('./src/assets', filename))}
</style>`;
