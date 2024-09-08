import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './index';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: StoryFn<{ label?: string; placeholder?: string }> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input Label',
  placeholder: 'Type here...',
};
