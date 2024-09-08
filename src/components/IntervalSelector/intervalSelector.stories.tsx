import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import IntervalSelector from './index';

export default {
  title: 'Components/IntervalSelector',
  component: IntervalSelector,
} as Meta;

const Template: StoryFn<{ handleChooseInterval: (time: string) => void }> = (args) => (
  <IntervalSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleChooseInterval: (time: string) => console.log(`Selected interval: ${time}`),
};
