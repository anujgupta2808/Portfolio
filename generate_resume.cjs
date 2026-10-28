const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const htmlPath = path.resolve(__dirname, 'public/resume.html');
const pdfPath = path.resolve(__dirname, 'public/resume.pdf');

const browserCandidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const browserExe = browserCandidates.find((p) => fs.existsSync(p));

if (!browserExe) {
  console.error('[GENERATE RESUME] Neither Chrome nor Edge was found on this system.');
  process.exit(1);
}

console.log(`[GENERATE RESUME] Rendering HTML to PDF using: ${browserExe}`);

try {
  const fileUrl = `file:///${htmlPath.replace(/\\/g, '/')}`;
  execSync(
    `powershell -Command "Start-Process -FilePath '${browserExe}' -ArgumentList '--headless', '--disable-gpu', '--no-pdf-header-footer', '--print-to-pdf=${pdfPath}', '${fileUrl}' -Wait"`,
    { stdio: 'inherit' }
  );

  if (fs.existsSync(pdfPath)) {
    const stats = fs.statSync(pdfPath);
    console.log(`[GENERATE RESUME] Success! PDF generated at: ${pdfPath} (${(stats.size / 1024).toFixed(1)} KB)`);
  } else {
    console.warn('[GENERATE RESUME] Warning: PDF file was not created.');
  }
} catch (err) {
  console.error('[GENERATE RESUME ERROR]', err.message);
}
