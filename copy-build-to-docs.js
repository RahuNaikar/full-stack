const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

const sourceDir = path.join(__dirname, 'build');
const destDir = path.join(__dirname, 'docs');

fse.removeSync(destDir);           // delete docs folder if exists
fse.copySync(sourceDir, destDir);  // copy build to docs

console.log('Copied build/ to docs/');
