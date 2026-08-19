const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function run(cmd, cwd) {
  console.log('Running:', cmd);
  const out = execSync(cmd, { cwd: cwd || __dirname, encoding: 'utf8' });
  if (out) console.log(out.trim());
  return out;
}

console.log('1. Building production bundles...');
run('npm run build');

const tempDir = path.join(__dirname, '..', 'gh-pages-deploy-temp');
if (fs.existsSync(tempDir)) {
  fs.rmSync(tempDir, { recursive: true, force: true });
}

console.log('2. Cloning gh-pages branch...');
run(`git clone https://github.com/risa113/tm-digital-marketing.git "${tempDir}"`);
run(`git -C "${tempDir}" checkout gh-pages`);

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

console.log('5. Configuring git identity in tempDir...');
run(`git -C "${tempDir}" config user.name "Mohamed Thariq"`);
run(`git -C "${tempDir}" config user.email "mohamedthariq113@gmail.com"`);

console.log('6. Forcing git add of all files including images...');
run(`git -C "${tempDir}" add -A -f`);

console.log('7. Checking status...');
const status = run(`git -C "${tempDir}" status --porcelain`);
console.log('Status:\n', status);

if (status && status.trim().length > 0) {
  console.log('8. Committing changes...');
  run(`git -C "${tempDir}" commit -m "Deploy latest production build with all founder assets and pages"`);
  console.log('9. Pushing to origin gh-pages...');
  run(`git -C "${tempDir}" push origin gh-pages`);
} else {
  console.log('gh-pages is already 100% up to date with dist!');
}

console.log('10. Cleaning up temporary directory...');
fs.rmSync(tempDir, { recursive: true, force: true });

console.log('Done!');
