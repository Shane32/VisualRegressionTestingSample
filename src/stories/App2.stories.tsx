import React from 'react';
import { Story, Meta } from '@storybook/react';

import App from '../App';

export default {
  title: 'App2',
  component: App,
  argTypes: {
  },
} as Meta;

const Template: Story<{}> = (args) => <App {...args} />;

export const Demo2 = Template.bind({});
Demo2.args = {};
