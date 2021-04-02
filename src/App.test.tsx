import * as React from 'react';
import App from './App';
import ControlApp from './ControlApp';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import ControlAppCss from './ControlAppCss';
import AppCss from './AppCss';
import ControlAppFont from './ControlAppFont';
import AppFont from './AppFont';
import ControlAppImage from './ControlAppImage';
import AppImage from './AppImage';
import AppLazyLoaded from './AppLazyLoaded';
import { Suspense } from 'react';
import AppLazyLoaded2 from './AppLazyLoaded2';

jest.setTimeout(10000);

it('renders basic sample', async () => {
    render(<p>test</p>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});

it('renders ControlApp', async () => {
    render(<ControlApp/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});

it('renders App', async () => {
    render(<App/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

it('renders ControlAppCss', async () => {
    render(<ControlAppCss/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});

it('renders AppCss', async () => {
    render(<AppCss/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

it('renders ControlAppFont', async () => {
    render(<ControlAppFont/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});

it('renders AppFont', async () => {
    render(<AppFont/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

it('renders ControlAppImage', async () => {
    render(<ControlAppImage/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});

it('renders AppImage', async () => {
    render(<AppImage/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

it('renders AppLazyLoaded', async () => {
    render(<Suspense fallback={<p>Lazy loaded fallback</p>}><AppLazyLoaded/></Suspense>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

it('renders AppLazyLoaded2', async () => {
    render(<AppLazyLoaded2/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})