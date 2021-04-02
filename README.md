# SampleRegressionTesting

This project was created to demonstrate visual regression testing within a typescript React app which uses css, sass, and sass modules.
There is a sample (`ControlApp`) which demonstrates properly working behavior when css is not used.
However, there are a number of problems existing:

1. Stylesheet references in the `index.html` file are not imported to the tests. So in this case fonts provided by Google Fonts are not displayed.
2. CSS references in the typescript files are not imported to the tests.
3. SASS references in the typescript files are not imported to the tests.
4. SASS Modules references in the typescript files are not imported to the tests.
5. If a component imports an image, the test process hangs.

This repo is configured so that a pull request against the repo will run the regression tests and report failures and upload image diff files.

## Goals

1. Patch the font import issue. This can likely be done by changing `render()` to include a `<script>` tag that imports the necessary font(s).
Ideally this would be automatic, scanning the `index.html` file for `<link rel="stylesheet">` stylesheet references, adding them to the test.

2. Automatically import CSS, SASS, and SASS Modules to the tests. Acceptable solutions would be to always import all CSS/SASS/Modules, or to
only import the CSS/SASS/Modules referenced by the component(s) being tested.

3. Fix image references within tests. Images need to render within the tests properly.

4. No changes to the source code of the components that need to be tested. In this sample, that means no changes to `<App>`, `index.html`, or
their dependencies (the CSS/SASS files or images) are allowed.

## Notes

Windows and Linux render differently; however, the problem is the same either way. The image snapshots in this repo were created on a Windows PC
and the automated workflows will run on Windows.

Once the problems have been fixed, the test suite should pass all tests.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.<br>
You should be able to see the `<App>` component properly displayed in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.<br>
This will run the three configured tests within `App.test.tsx`.
