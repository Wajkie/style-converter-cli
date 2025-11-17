#!/usr/bin/env node

import('../dist/index.js').then(module => {
  module.run();
}).catch(err => {
  console.error('Failed to run tailwind-convert:', err);
  process.exit(1);
});
