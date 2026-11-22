import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const pagesDir = path.join(root, 'pages');
const shotsDir = path.join(root, 'verification', 'screenshots');
fs.mkdirSync(shotsDir, { recursive: true });

const files = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.html'))
  .sort();

const EXPECT = {
  html: 12,
  tb: 48,
  btn: 30,
  p: 12,
  sb: 210,
};

function close(actual, expected, tol = 0.1) {
  return Math.abs(actual - expected) <= tol;
}

function mark(actual, expected) {
  if (actual == null) return 'n/a';
  const ok = close(actual, expected);
  return `${actual.toFixed(2)}px ${ok ? '✓' : '✗'}`;
}

const browser = await chromium.launch();
const rows = [];

for (const file of files) {
  // Fresh context per page => zero cache/style carryover between pages.
  const context = await browser.newContext({ viewport: { width: 1440, height: 1600 } });
  const page = await context.newPage();
  const url = 'file:///' + path.join(pagesDir, file).replace(/\\/g, '/');
  await page.goto(url, { waitUntil: 'networkidle' });

  const data = await page.evaluate(() => {
    function cssPx(el, prop) {
      if (!el) return null;
      const v = getComputedStyle(el)[prop];
      return v ? parseFloat(v) : null;
    }
    const htmlFs = parseFloat(getComputedStyle(document.documentElement).fontSize);

    const tb = document.querySelector('.tb');
    const tbHeight = cssPx(tb, 'height');

    const btn = document.querySelector('.btn:not(.g)');
    const btnHeight = cssPx(btn, 'height');

    let pInfo = { size: null, snippet: null };
    const ps = Array.from(document.querySelectorAll('p'));
    for (const p of ps) {
      const text = (p.textContent || '').trim();
      if (text.length > 20) {
        pInfo = { size: parseFloat(getComputedStyle(p).fontSize), snippet: text.slice(0, 40) };
        break;
      }
    }

    const sb = document.querySelector('.sb');
    const sbWidth = cssPx(sb, 'width');

    return {
      htmlFs,
      tbHeight,
      btnHeight,
      pSize: pInfo.size,
      pSnippet: pInfo.snippet,
      sbWidth,
    };
  });

  await page.screenshot({
    path: path.join(shotsDir, file.replace('.html', '.png')),
    fullPage: true,
  });

  rows.push({
    file,
    htmlFs: data.htmlFs,
    tbHeight: data.tbHeight,
    btnHeight: data.btnHeight,
    pSize: data.pSize,
    pSnippet: data.pSnippet,
    sbWidth: data.sbWidth,
  });

  await context.close();
}

await browser.close();

function fmtP(r) {
  if (r.pSize == null) return 'n/a (no long <p>)';
  const ok = close(r.pSize, EXPECT.p);
  return `${r.pSize.toFixed(2)}px ${ok ? '✓' : '✗'} ("${r.pSnippet}…")`;
}

let md = '| Page | html font-size | top bar height | button height | body text size | sidebar width |\n';
md += '|---|---|---|---|---|---|\n';
let allOk = true;
for (const r of rows) {
  const htmlCell = mark(r.htmlFs, EXPECT.html);
  const tbCell = r.tbHeight == null ? 'n/a (no .tb)' : mark(r.tbHeight, EXPECT.tb);
  const btnCell = r.btnHeight == null ? 'n/a (no .btn)' : mark(r.btnHeight, EXPECT.btn);
  const pCell = fmtP(r);
  const sbCell = r.sbWidth == null ? 'n/a (no .sb)' : mark(r.sbWidth, EXPECT.sb);
  if ([htmlCell, tbCell, btnCell, pCell, sbCell].some(c => c.includes('✗'))) allOk = false;
  md += `| ${r.file} | ${htmlCell} | ${tbCell} | ${btnCell} | ${pCell} | ${sbCell} |\n`;
}

console.log(md);
console.log(allOk ? '\nALL ROWS MATCH' : '\nMISMATCH FOUND');
process.exitCode = allOk ? 0 : 1;
