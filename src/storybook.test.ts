import path from 'path';

import initStoryshots from '@storybook/addon-storyshots';

// the required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions: (arg) => {
        const fileName = (arg.context as any).fileName;
        const snapshotPath = path.join('./_image_snapshots', path.dirname(fileName));
        return { customSnapshotsDir: snapshotPath };
    },
    storybookUrl: `file://${path.resolve(__dirname, '../storybook-static')}`
  }),
});