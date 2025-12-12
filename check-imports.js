const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
    files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];
    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const files = getAllFiles('c:/Users/Rehan Ahmad/Desktop/src', []);
const imports = new Set();

files.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const regex = /from ['"]([^'"]+)['"]/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        if (!match[1].startsWith('.') && !match[1].startsWith('@/')) {
            imports.add(match[1].split('/')[0] + (match[1].startsWith('@') ? '/' + match[1].split('/')[1] : ''));
        }
    }
});

const packageJson = JSON.parse(fs.readFileSync('c:/Users/Rehan Ahmad/Desktop/src/package.json', 'utf8'));
const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

console.log('--- MISSING DEPENDENCIES ---');
imports.forEach(imp => {
    // Basic heuristics for built-ins and commonly omitted deps
    if (['react', 'fs', 'path', 'crypto', 'stream', 'util', 'os', 'net', 'tls', 'next'].includes(imp)) return;
    if (imp.startsWith('next/')) return;

    if (!deps[imp]) {
        console.log("Missing:", imp);
    }
});
