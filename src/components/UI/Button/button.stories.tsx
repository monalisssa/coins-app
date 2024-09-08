import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn<{ children: React.ReactNode }> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
};
