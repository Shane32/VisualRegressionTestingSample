# Visual Regression Testing with React

This project was created to demonstrate visual regression testing within a typescript React app which uses css, sass, and sass modules.

This repo is configured so that a pull request against the repo will run the regression tests and report failures and upload image diff files.

To accomplish this, [Storybook](https://storybook.js.org/) was used.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
You should be able to see the `<App>` component properly displayed in your browser.

### `npm run storybook`

Runs the interactive storybook web app.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### `npm run build-storybook`

Builds the storybook as a static web app, so that tests can be run against the compiled html.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br>
This will run the three configured tests within `App.test.tsx`.

Note that this requires the interactive copy of storybook or the static copy to have been previously built.

### `npm run test-storybook`

Builds the storybook as a static web app, then runs tests against it.
