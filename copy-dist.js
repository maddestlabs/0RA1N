const fs = require('fs');
const path = require('path');

// Create dist folder if it doesn't exist
if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

// Files to copy
const filesToCopy = [
    'index.html',
    'manifest.json',
    'service-worker.js'
];

// Add all .ogg, .otf, and .png files
const allFiles = fs.readdirSync('.');
allFiles.forEach(file => {
    if (file.match(/\.(ogg|otf|png)$/)) {
        filesToCopy.push(file);
    }
});

// Copy files to dist
filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join('dist', file));
        console.log(`Copied ${file} to dist/`);
    }
});

console.log('✓ All files copied to dist/');
