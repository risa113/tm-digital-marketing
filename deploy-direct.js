const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd) {
  console.log('Running:', cmd);
  const out = execSync(cmd, { encoding: 'utf8' });
  if (out) console.log(out.trim());
  return out;
}

console.log('1. Building production bundles...');
run('npm run build');

const tempDir = path.join(__dirname, '..', 'gh-pages-deploy-temp');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log('2. Cloning current gh-pages branch...');
run(`git clone --depth 1 --branch gh-pages https://github.com/risa113/tm-digital-marketing.git "${tempDir}"`);

console.log('3. Cleaning old assets in temp worktree...');
const oldFiles = fs.readdirSync(tempDir);
for (const f of oldFiles) {
  if (f !== '.git') {
    fs.rmSync(path.join(tempDir, f), { recursive: true, force: true });
  }
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('4. Copying fresh dist assets...');
copyRecursiveSync(path.join(__dirname, 'dist'), tempDir);

console.log('Files copied to deploy temp:', fs.readdirSync(tempDir));

console.log('5. Staging all files...');
run(`git -C "${tempDir}" add -A`);

console.log('6. Committing...');
try {
  run(`git -C "${tempDir}" commit -m "Deploy latest production build with all founder assets and pages"`);
} catch (e) {
  console.log('Commit note:', e.message);
}

console.log('7. Pushing to origin gh-pages...');
run(`git -C "${tempDir}" push origin gh-pages`);

console.log('8. Cleaning up temporary directory...');
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('Done! Successfully deployed all dist files directly to origin/gh-pages!');
