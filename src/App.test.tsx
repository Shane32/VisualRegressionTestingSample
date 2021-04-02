import * as React from 'react';
import App from './App';
import ControlApp from './ControlApp';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';

it('renders app', async () => {
    render(<App/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
})

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

it('renders control sample', async () => {
    render(<ControlApp/>);
    const screenshot = await generateImage({
        viewport: {
            height: 800,
            width: 500
        }
    });
    expect(screenshot).toMatchImageSnapshot();
});