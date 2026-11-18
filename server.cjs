'use strict';

if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production';
}

import('./dist/server/server.js')
  .then((serverModule) => serverModule.serverReady)
  .catch((error) => {
    console.error('Failed to start Klyia Technology production server:', error);
    process.exit(1);
  });
