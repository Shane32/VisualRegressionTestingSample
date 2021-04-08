import React, { Suspense } from 'react';
import { Story, Meta } from '@storybook/react';

import AppLazyLoadedTemp from './AppLazyLoaded';

const AppLazyLoaded = (props: any) => {
  return <Suspense fallback={<p>Please wait...</p>}><AppLazyLoadedTemp {...props} /></Suspense>;
}

export default {
  title: 'AppLazyLoaded',
  component: AppLazyLoaded,
  argTypes: {
  },
} as Meta;

const Template: Story<{}> = (args) => <AppLazyLoaded {...args} />;

export const Demo = Template.bind({});
Demo.args = {
};
