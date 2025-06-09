const fs = require('fs-extra');

const source = 'build';
const destination = 'docs';

fs.remove(destination)
  .then(() => fs.copy(source, destination))
  .then(() => console.log('✅ Copied build to docs successfully!'))
  .catch(err => console.error('❌ Error copying files:', err));
