import path from 'path';

import initStoryshots from '@storybook/addon-storyshots';

// the required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

import { devices } from 'puppeteer';

initStoryshots({
  suite: 'iPhone 11',
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions: (arg) => {
        const fileName = (arg.context as any).fileName;
        const snapshotPath = path.join('./_image_snapshots', path.dirname(fileName));
        return { customSnapshotsDir: snapshotPath };
    },
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
    customizePage: (page) => page.emulate(devices['iPhone 11']),
  }),
});

initStoryshots({
    suite: 'iPhone 11 landscape',
    // your own configuration
    test: imageSnapshot({
      // invoke the function above here
      getMatchOptions: (arg) => {
          const fileName = (arg.context as any).fileName;
          const snapshotPath = path.join('./_image_snapshots', path.dirname(fileName));
          return { customSnapshotsDir: snapshotPath };
      },
      storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
      customizePage: (page) => page.emulate(devices['iPhone 11 landscape']),
    }),
  });
  
initStoryshots({
    suite: 'Desktop 1920x1080',
    // your own configuration
    test: imageSnapshot({
      // invoke the function above here
      getMatchOptions: (arg) => {
          const fileName = (arg.context as any).fileName;
          const snapshotPath = path.join('./_image_snapshots', path.dirname(fileName));
          return { customSnapshotsDir: snapshotPath };
      },
      storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`,
      customizePage: (page) => page.emulate({
          viewport: {
              width: 1920,
              height: 1080,
          },
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36'
       }),
    }),
  });
